"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var apollo_datasource_1 = require("apollo-datasource");
var PrismaAPI = /** @class */ (function (_super) {
    __extends(PrismaAPI, _super);
    function PrismaAPI() {
        return _super.call(this) || this;
    }
    PrismaAPI.prototype.initialize = function (config) {
        this.context = config.context;
        console.log({ config: config });
    };
    PrismaAPI.prototype.getCategories = function () {
        return [{ name: 'first' }, { name: 'second' }];
    };
    return PrismaAPI;
}(apollo_datasource_1.DataSource));
exports["default"] = PrismaAPI;
