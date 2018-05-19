var arr=[],arr1=[];
var i,pos=-1;

if (typeof(Storage) !== "undefined") {
var str =localStorage.getItem("Records");
arr = JSON.parse(str);
}

function adto()
{
var nam=document.getElementById("nme").value;

for(i=0;i<arr.length;i++)
{if(nam.localeCompare(arr[i][0])==0)
 {pos=i;
   break;}}

if(pos==-1)
{alert("Record not found");}
else
{

arr[i][1]=document.getElementById("Rate").value;
arr[i][2]=document.getElementById("Desc").value;


var str = JSON.stringify(arr);
if (typeof(Storage) !== "undefined") {
    localStorage.setItem("Records", str);
    } 
else {
    document.getElementById("content").innerHTML = "Sorry, your browser does not support Web Storage...";
       }
alert("Record edited");
}
}


