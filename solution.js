function moveZeros(arr) {
  for(i=arr.length; i>=0; i--) {
    if(arr[i]===0) {
      arr.splice(i,1)
      arr.push(0)
    }
  }
  return arr
}
