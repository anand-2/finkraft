//a = "This is a test"
//b = "React developer test"



function Longest(a,b)
{
    var max = "";
    var arr1 = [];
    var arr2 = [];

    for(var i=0;i<a.length;i++)
    {

         arr1[i] =  a.split(" ");
         arr2[i] =  b.split(" ");

         for(var j = 0;j<i;j++)
         {
            if(arr1[i] === arr2[j] && arr1[j] > max)
            {
                max = arr1[j];
            }
            
         }
    }
    

   
    return max;
}