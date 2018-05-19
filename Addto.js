

var arr=[];

if (typeof(Storage) !== "undefined") {
var str =localStorage.getItem("Records");
if(JSON.parse(str)!=null)
arr = JSON.parse(str);
}

function adto()
{
var nam=document.getElementById("name").value;
var Rat=document.getElementById("Rate").value;
var Des=document.getElementById("Desc").value;

{
arr.push([nam,Rat,Des]);
}

var str = JSON.stringify(arr);
if (typeof(Storage) !== "undefined") {
    localStorage.setItem("Records", str);
    } 
else {
    document.getElementById("content").innerHTML = "Sorry, your browser does not support Web Storage...";
       }
alert("Mentee record added");
}
   

