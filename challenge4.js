var superCounter = function(num){ 
  var words = num.split(" ").length;
  var spaces = words -1;
  var charCount = num.length - spaces; 
  var avgLength = charCount / words;
  var output = '{Words: ' + words + ', characters: ' + charCount + ', spaces: ' + spaces + ', average length: ' + avgLength + spaces + '}';
  return output;
};

console.log(superCounter("Count me in"));
