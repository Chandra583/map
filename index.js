let arr = [45,21,22] ;
let a =arr.map((value, index, array)=>{
  console.log(value,index,array);
  return value + 1 + index + array; 
});
console.log(a)
console.log("HEllo world!")