
function findLongestWord(str) {
  var word=str.split(' ');
  var wordlength=0;
  for(i=0;i<word.length;i++){
    if(word[i].length>wordlength){
      wordlength=word[i].length;
    }
  }
  return wordlength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
