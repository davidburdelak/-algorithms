function scramble(str1, str2){
  
  function sortEm(string){
    return string.split('').sort();
  }
  first = sortEm(str1);
  second = sortEm(str2);

  for (let i = 0; i < second.length; i++){
    if (!first.includes(second[i])){
      return false;
    }
  }
  return true;
 
}

console.log(scramble('rkqodlw', 'world')) // True
console.log(scramble('katas', 'steak')) // False