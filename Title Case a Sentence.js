
function titleCase(str) {
  var strarry=str.toLowerCase().split(' ');
  var result=strarry.map(function(val){
    return val.replace(val.charAt(0),val.charAt(0).toUpperCase());
  });
  return result.join(' ');
}

titleCase("I'm a little tea pot");
