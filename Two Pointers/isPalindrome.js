// Write a function that takes a string s as input and checks whether it’s a palindrome or not.

function isPalindrome(str) {
  let left = 0
  let right = str.length -1 

  while (left <= right) {

    if(str[left] !== str[right]){
      return false
    }else{
      left ++
      right --
    }
    
  }
  return true

}

console.log(isPalindrome('ABCBA'))