'use strict';
var double_to = require("../../practices/flaten/double_dimensional_array_to_one_1.js");
function double_to_one(collection) {
  //在这里写入代码
  var arr =[];
  arr = double_to(collection);
  var n = []; //一个新的临时数组
  for (var i = 0; i <arr.length; i++) //遍历当前数组
  {
    //如果当前数组的第i在临时数组已有，跳过，否则把当前项push到临时数组里
    if (n.indexOf(arr[i]) == -1) n.push(arr[i]);
  }
  return n;
}

module.exports = double_to_one;
var collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]];
console.log(double_to_one(collection));
