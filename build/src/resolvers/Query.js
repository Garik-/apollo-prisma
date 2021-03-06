"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var graphqlgen_1 = require("../../generated/graphqlgen");
exports.Query = __assign({}, graphqlgen_1.QueryResolvers.defaultResolvers, { categories: function () {
        return [{ name: 'first' }, { name: 'second' }];
    } });
