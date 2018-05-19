


var arr=[],arr1=[];
var i,pos=-1;

if (typeof(Storage) !== "undefined") {
var str =localStorage.getItem("Records");
arr = JSON.parse(str);
}

function adto()
{
if(arr==null)
{alert("No Records exist!");}
else
{
var nam=document.getElementById("nme").value;

for(i=0;i<arr.length;i++)
{if(nam.localeCompare(arr[i][0])==0)
 {pos=i;
   break;}

}

if(pos==-1)
{alert("Record not found!");}

else
{
for(i=0;i<pos;i++)
{arr1[i]=arr[i];
}

for(i=pos;i<arr.length-1;i++)
{arr1[i]=arr[i+1];}



var str = JSON.stringify(arr1);
if (typeof(Storage) !== "undefined") {
    localStorage.setItem("Records", str);
    } 
else {
    document.getElementById("content").innerHTML = "Sorry, your browser does not support Web Storage...";
       }
alert("Record with name "+nam+" deleted");
}
}
}





