let arr=[12,34,45,564,67,67,4,34,22]
for (let a in arr)
console.log(arr[a])
console.log("im outside")

 let arr1=[12,34,45,564,67,67,4,34,22]
for (let a of arr1)
console.log(a)
console.log("im outside")

function display()
{
  console.log("hello")
}
display()
console.log("see u")

function add(a,b)
{
  let c=a+b;
  console.log("hello")
  return c;
}
let ans=add(10,23)
console.log("see u",ans)

function add1(a,b)
{
  let c =a+b;
  console.log("hello")
   
}
 add(10,23)
console.log("see u")

function add2()
{
  
  console.log("hello")
   return 10
}
 let ans2=add()
console.log("see u",ans)