
function FnB(x: number[]) 
{
  for (let i = 0; i < x.length; ++i)
  {
    
    if(x[i] % 15 === 0)
    {
      console.log("fizzbuzz")
    }
    else if(x[i] % 3 === 0)
    {
      console.log("fizz")
    }
    else if(x[i] % 5 === 0)
    {
      console.log("buzz")
    }
   
    else console.log(x[i])

  }
}
var rNg = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
FnB(rNg)
