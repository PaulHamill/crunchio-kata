angular.module('templates-variableCatalog', ['template-variable-catalog']);

angular.module("template-variable-catalog", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("template-variable-catalog",
    "<div>\n" +
    "  <ul>\n" +
    "    <li ng-repeat=\"e1 in graph\" ng-class=\"{expand: e1.name}\">\n" +
    "      <a catalog-category href=\"#\">{{ e1.name }}</a>\n" +
    "      <ul>\n" +
    "        <li ng-repeat=\"e2 in e1.value\" ng-class=\"{expand: e2.name}\">\n" +
    "          <a ng-if=\"e2.name\" catalog-category href=\"#\">{{ e2.name }}</a>\n" +
    "          <ul ng-if=\"e2.name\">\n" +
    "            <li ng-repeat=\"e3 in e2.value\">\n" +
    "              <a catalog-var=\"{{ e3 }}\" href=\"#\"></a>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "          <a ng-if=\"!(e2.name)\" catalog-var=\"{{ e2 }}\" href=\"#\"></a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);
