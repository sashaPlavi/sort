"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./sorter/Sorter");
var NumbersCollection_1 = require("./sorter/helper/NumbersCollection");
var numberscollection = new NumbersCollection_1.NumbersCollection([10, 28, 3, 4, -5]);
var sorter = new Sorter_1.Sorter(numberscollection);
sorter.sort();
console.log(numberscollection.data);
