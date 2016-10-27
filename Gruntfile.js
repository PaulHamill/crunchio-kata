module.exports = function (grunt) {
    'use strict';

    // Load grunt tasks
    require('load-grunt-tasks')(grunt);

    var _ = require('lodash');

    var CONFIG = {
        'APP': 'app',
        'BOWER': grunt.file.readJSON('bower.json'),
        'DEMO': 'demo',
        'DIST': 'dist',
        'DIST_CSS': '<%= CONFIG.DIST %>/css',
        'DIST_JS': '<%= CONFIG.DIST %>/js',
        'JS_SRC': '<%= CONFIG.APP %>/scripts',
        'LESS_SRC': '<%= CONFIG.APP %>/less',
        'HTML_SRC': '<%= CONFIG.APP %>/html',
        'PKG': grunt.file.readJSON('package.json')
    };

    var gruntConfig = {
        'bump': {
            'options': {
                'files': ['bower.json', 'package.json'],
                'updateConfigs': ['CONFIG.PKG'],
                'commit': false,
                'createTag': false,
                'push': false
            }
        },

        'clean': {
            'app': [
                '<%= CONFIG.JS_SRC %>/*.tpl.js',
                '<%= CONFIG.LESS_SRC %>/*.css'
            ],
            'dist': [
                '<%= CONFIG.DIST_CSS %>',
                '<%= CONFIG.DIST_JS %>'
            ]
        },

        'concat': {
            'dist': {
                'files': {
                    '<%= CONFIG.DIST_JS %>/<%= CONFIG.PKG.name %>.js': [
                        '<%= CONFIG.JS_SRC %>/**/*.js',
                    ]
                }
            }
        },

        'connect': {
            'options': {
                'debug': true,
                'hostname': '*'
            },
            'all': {
                'options': {
                    'base': '.',
                    'port': 8002
                }
            },
            'app': {
                'options': {
                    'base': '<%= CONFIG.APP %>',
                    'port': 8001
                }
            },
            'dist': {
                'options': {
                    'base': '<%= CONFIG.DIST %>',
                    'port': 8000
                }
            }
        },

        'copy': {
            'dist': {
                'files': [
                    {
                        'expand': true,
                        'cwd': '<%= CONFIG.LESS_SRC %>/',
                        'src': '*.css',
                        'dest': '<%= CONFIG.DIST_CSS %>/',
                        'flatten': true
                    },
                    {
                        'expand': true,
                        'cwd': '<%= CONFIG.APP %>/images',
                        'src': '*.png',
                        'dest': '<%= CONFIG.DIST %>/images',
                        'flatten': true
                    },
                    {
                        'expand': true,
                        'cwd': '<%= CONFIG.JS_SRC %>',
                        'src': '*-schema.json',
                        'dest': '<%= CONFIG.DIST_JS %>/',
                        'flatten': true
                    }
                ]
            }
        },

        'CONFIG': CONFIG,

        'html2js': {
            'options': {
                'base': '<%= CONFIG.JS_SRC %>',
                'useStrict': true,
                'rename': function (moduleName) {
                    return 'template-' + moduleName.replace(/\.\.\/html\/(.*?)\.html$/, '$1');
                }
            },
            'variableCatalog': {
                'src': [
                    '<%= CONFIG.HTML_SRC %>/*.html'
                ],
                'dest': '<%= CONFIG.JS_SRC %>/variable-catalog.tpl.js'
            }
        },

        'http-server': {
            'dist': {
                'autoIndex': true,
                'host': '0.0.0.0',
                'port': 8081,
                'root': '<%= CONFIG.DEMO %>',
                'runInBackground': true
            }
        },

        'jshint': {
            'options': {
                'jshintrc': true
            },
            'app': {
                'files': {
                    'src': [
                        '<%= CONFIG.JS_SRC %>/**/*.js'
                    ]
                }
            },
            'gruntfile': {
                'files': {
                    'src': 'Gruntfile.js'
                }
            },
            'tests': {
                'files': {
                    'src': ['test/**/*.js']
                }
            }
        },

        'karma': {
            'dev': {
                'configFile': 'test/karma.conf.js'
            }
        },

        'less': {
            'app': {
                'options': {
                    'sourceMap': true,
                    'outputSourceFiles': true
                },
                'files': {
                    '<%= CONFIG.LESS_SRC %>/<%= CONFIG.PKG.name %>.css': '<%= CONFIG.LESS_SRC %>/variable-catalog.less'
                }
            },
            'dist': {
                'options': {
                    'banner': '/*! <%= CONFIG.PKG.name %> @ <%= CONFIG.PKG.version %> */\n',
                    'cleancss': true
                },
                'files': {
                    '<%= CONFIG.DIST_CSS %>/<%= CONFIG.PKG.name %>.min.css': '<%= CONFIG.LESS_SRC %>/variable-catalog.less'
                }
            }
        },

        'protractor': {
            'options': {
                'keepAlive': true
            },
            'dist': {
                'options': {
                    'configFile': 'test/protractor-local.conf.js',
                    'args': {
                        'baseUrl': 'http://localhost:8081/'
                    }
                }
            }
        },

        'uglify': {
            'dist': {
                'options': {
                    'banner': '/* <%= CONFIG.PKG.name %> @ <%= CONFIG.PKG.version %> */\n'
                },
                'files': {
                    '<%= CONFIG.DIST_JS %>/<%= CONFIG.PKG.name %>.min.js': [
                        '<%= CONFIG.JS_SRC %>/**/*.js'
                    ]

                }
            }
        },

        'watch': {
            'app': {
                'files': [ // less, js, tpl.html files
                    '<%= CONFIG.LESS_SRC %>/**/*.less',
                    '<%= CONFIG.JS_SRC %>/**/*.js'
                ],
                'tasks': ['default']
            },
            'test': {
                'files': '<%= jshint.tests.files.src %>',
                'tasks': ['jshint:tests']
            },
            'none': {
                'files': [],
                'tasks': []
            }
        }
    };

    grunt.initConfig(gruntConfig);

    // task entries

    grunt.registerTask('default', ['syntax', 'clean:app', 'less:app', 'html2js']);
    grunt.registerTask('syntax', ['jshint']);
    grunt.registerTask('stage', ['default', 'clean:dist', 'copy:dist', 'concat:dist', 'less:dist', 'copy:dist', 'uglify:dist']);

    // grunt.registerTask('test-dist', ['http-server:dist', 'protractor:dist']);
};
