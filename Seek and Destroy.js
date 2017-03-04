//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments); //转换为argument对象的数组
  args.splice(0, 1);//去掉第一个数组
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;  //在第二个数组中找第一个数组中不存在的元素返回，然后在返回给filter的参数作为true，就找到了第一个数组中和后面的元素不重复的元素了
  });
}
