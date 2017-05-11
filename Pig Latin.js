//Translate the provided string to pig latin.
//pig Latin takes the first consonant (or consonant cluster) of an English word,
//moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end
function translatePigLatin(str) {
  var pigLatin='';
  var regex= /[aeiou]/gi;//search aeiou and ignore captial
  if(str[0].match(regex)){
    pigLatin=str+'way';
  }else{
    var vwelIndice=str.indexOf(str.match(regex)[0]);
    pigLatin=str.substr(vwelIndice)+str.substr(0,vwelIndice)+'ay';
  }
  return pigLatin;
}

translatePigLatin("consonant");

//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

var a = [2, 9, 9]; 
a.indexOf(2); // 0 
