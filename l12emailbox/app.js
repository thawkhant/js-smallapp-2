const getemail = document.getElementById("emails");
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector(".btn");
const getemcontainer = document.querySelector(".email-container");

getemail.focus();

getemail.addEventListener("keyup",function(e){
	// createemaillist(e.target)
  // createemaillist(e.target.value);
    
   // createemaillist(this)
   createemaillist(this.value)
});

function createemaillist(inputtext){
   // console.log(inputtext);
   
   // splite by (",")
   // const eitems = inputtext.split(',');
   // console.log(eitems);

   // remove empty,empty (space)
  // const eitems = inputtext.split(',').filter(rmempty => rmempty.trim() !== "");

   // const eitems = inputtext.split(',');              ** ezz style we was saw at foundation class
   // var abc = eitems.filter(function(eitem){
   // })
  // console.log(eitems)

  //remove space/empty
  const emitems = inputtext.split(',').filter(reempty => reempty.trim() !== "").map(reempty=>reempty.trim());    //Array nae return pyan say chin lot map nat pat dar
  // console.log(emitems);

  getemcontainer.innerHTML="";     //pyint cha lite dar // a nout sone a chay a nay ko bal ya aung // a shay ka kaung dwe ma lo bu

  emitems.forEach(function(emitem){
   //console.log(emitem);

   const setnewspan = document.createElement('span');
   setnewspan.textContent = emitem;
   setnewspan.classList.add('email-item')
   // console.log(setnewspan);

   getemcontainer.appendChild(setnewspan);
  })
}

getbtn.addEventListener('click',function(e){
  
   sendemail();

  e.preventDefault();
});

function sendemail(){
   // console.log("I am working");

   const gettextvalue = gettextarea.value;
   const getaddress = document.querySelectorAll('.email-item');     // email-item dwe ka win lar mar mot pr
   // console.log(gettextvalue);
  // console.log(getaddress);


  var persons = [];
  
  if(getaddress.length > 0 && gettextvalue){

  getaddress.forEach(function(getaddress){
   persons.push({
      email:getaddress.textContent,   // textContent ka sar thar ko lo dar 
      message:gettextvalue
   })

   console.log(persons);
  });

}else{
   window.alert("Enter Message");
   gettextarea.focus();
}


}





