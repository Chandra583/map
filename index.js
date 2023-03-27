let arr = [45,21,22] ;
let a =arr.map((value, index, array)=>{
  console.log(value,index,array);
  return value + 1 + index; 
});
console.log(a)
