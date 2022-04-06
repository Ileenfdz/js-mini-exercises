function countPositivesSumNegatives(input) {
  let array = []
  let sum = 0
  let count = 0;
  
  if (input == null || input.length < 1){
  return [];
}else{
    for(let i = 0;i < input.length;i++){
    if(input[i] < 0){
       sum = sum + input[i];
    }else if(input[i] > 0){
      count++;
    }
  }
  array.push(count)
  array.push(sum)
   return(array);
  }
}

module.exports = countPositivesSumNegatives