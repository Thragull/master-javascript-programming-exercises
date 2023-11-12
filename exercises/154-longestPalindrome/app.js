function findLongestPalindrome(sentence) {
  // your code here
  let longest = '';

  for (i=0; i<sentence.length; i++){
    let word='';
    for (x=i; x<sentence.length; x++){
      word += sentence[x];
      if (isPalindrome(word) && longest.length < word.length) longest = word;
    }
  }
  return longest;
}

function reverseString(string) {
  // your code here
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // your code here
  if (word.toLowerCase() === reverseString(word.toLowerCase()) && word.length > 1) return true;
  else return false;
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
