function removeDuplicateWords (s) {
  var str = s.split(" ");
  var result = [];
  for(var i =0; i < str.length ; i++){
      if(result.indexOf(str[i]) === -1){
        result.push(str[i]);
      } 
  }
   return result.join(" ");
}
  
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')