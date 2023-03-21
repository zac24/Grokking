// Squaring a Sorted Array

/*
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]
*/

function squaringAsortedArray(arr) {
  let left = 0 
  const n = arr.length 
  let right = n - 1
  let highestSqIdx = arr.length -1 
  let sqrdArray = Array(n).fill(0)

  while (left <= right) {
    const leftSquare = arr[left] * arr[left]
    const rightSquare = arr[right] * arr[right]
    
    if (leftSquare > rightSquare) {
      sqrdArray[highestSqIdx] = leftSquare 
      left++
    } else {
      sqrdArray[highestSqIdx] = rightSquare
      right--
    }
    highestSqIdx-- 
  }
  return sqrdArray 
}

console.log(squaringAsortedArray([-2, -1, 0, 2, 3]))
console.log(squaringAsortedArray([-3, -1, 0, 1, 2]))