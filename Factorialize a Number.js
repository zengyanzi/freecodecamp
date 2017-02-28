
function factorialize(num) {
  var a=1;
  for(i=2;i<=num;i++){
    a=a*i;
  }
  return a;
}

factorialize(5);
