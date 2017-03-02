//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  // repeat after me
  var arr=[];
  for(i=0;i<num;i++){
    arr.push(str);
  }
  return arr.join('');
}

repeatStringNumTimes("abc", 3);
