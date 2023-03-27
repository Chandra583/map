let arr = [45,21,22] ;
let a =arr.map((value, index)=>{
  console.log(value,index);
  return value + 1 + index; 
});
console.log(a)
