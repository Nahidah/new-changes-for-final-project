//alert("loading");

function addNewWeField() {
    //console.log("Adding new fields");

    //creating a node
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-contro");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3 );
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

///adding other tables for academic qualifications/////
function addNewAQField() {

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-contro");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3 );
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

//Generate cv.. it will take values from our filled forms and generate it to out cv template
function generateCV(){
   // console.log("generating cv")

   let nameField=document.getElementById("nameField").value;

   let nameT1=document.getElementById("nameT1");

   nameT1.innerHTML=nameField;

   //direct procedure

   document.getElementById("nameT2").innerHTML=nameField;


   //contact
   document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

   //address
   document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

   //links
   document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
   document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
   document.getElementById("LinkedT").innerHTML=document.getElementById("LinkedField").value;


   //objective
   document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

   //work experience
   let wes=document.getElementsByClassName("weField");

   let str="";

   for(let e of wes){
    str=str + `<li> ${e.value} </li>`;
   }
   

   document.getElementById("weT").innerHTML= str;


   //academic qualification
   let aqs=document.getElementsByClassName("eqField");

   let str1="";

   for(let e of aqs ){
    str1 += `<li> ${e.value} </li>`;
   }

   document.getElementById("aqT").innerHTML= str1;

   //code for setting image
   let file=document.getElementById("imgField").files[0];

   console.log(file);

   let reader=new FileReader();

   reader.readAsDataURL(file);

   console.log(reader.result);

   //put image into template
   reader.onloadend = function() {
    document.getElementById("imgTemplate").src = reader.result;
   }
 

   document.getElementById("cv-form").style.display="none";
   document.getElementById("cv-template").style.display="block";
}

//print cv
function printCV(){
    window.print();
}