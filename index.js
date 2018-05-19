var temp; 


function adto()
{
var x = document.getElementById("content");
var str =localStorage.getItem("Records");
var arr = JSON.parse(str);


if(arr!=null)
{
console.log(arr.length);

for(var z = 0; z < arr.length; z++)
if(arr[z]!=null)
{
 {
var para = document.createElement("div"); 
para.id="para"+z;
para.ClassName="pary";


 for(var i = 0; i < arr[z].length; i++)

{
 var lin = document.createElement("p"); 
if(i==0)
{                    
 var t = document.createTextNode("NAME: "+arr[z][i]);  
} 
if(i==1)
{                    
 var t = document.createTextNode("RATING: "+arr[z][i]);  
} 
if(i==2)
{                    
 var t = document.createTextNode("DESCRIPTION: "+arr[z][i]);  
}    
 


lin.appendChild(t);
 para.appendChild(lin);
}                                          
 document.getElementById("content").appendChild(para); 

if(arr[z][1]==5)
document.getElementById(("para"+z)).style.backgroundColor = "green"; 
else if(arr[z][1]==4)
document.getElementById(("para"+z)).style.backgroundColor = "GreenYellow"; 
else if(arr[z][1]==3)
document.getElementById(("para"+z)).style.backgroundColor = "yellow"; 
else if(arr[z][1]==2)
document.getElementById(("para"+z)).style.backgroundColor = "orange"; 
else if(arr[z][1]==1)
document.getElementById(("para"+z)).style.backgroundColor = "red";          
}

}
}

}



function sort()
{var arr=[];

if (typeof(Storage) !== "undefined") {
var str =localStorage.getItem("Records");
if(JSON.parse(str)!=null)
arr = JSON.parse(str);
}

var k=arr.length;

for(var i = 0; i < k; i++)
{if(arr[i]==null)
{arr[i]=arr[k-1];
arr[k-1]=null;
k-=1;
}}


for(var i = 0; i < k-1; i++)
{for(var j = i+1; j < k; j++)
{        
          if (arr[i][1] < arr[j][1])          
               {
                        temp= arr[i];          
                       arr[i] = arr[j];
                        arr[j] = temp;
               }
          }
     }


var str = JSON.stringify(arr);
if (typeof(Storage) !== "undefined") {
    localStorage.setItem("Records", str);
    } 
else {
    document.getElementById("content").innerHTML = "Sorry, your browser does not support Web Storage...";
       }
adto();
}

adto();

