var gettablinks = document.getElementsByClassName('tablinks');    // HTML Collection
var gettabpanes = document.getElementsByClassName("tab-pane");   // HTML Collection
//console.log(gettabpanes);   // HTML Collection ka har ko looping pat lot ma ya buu // pat chin yin array pyoung
var getbtncloses = document.querySelectorAll(".btn-close");   //Node List    *amyar ko call chin lot lot dar a tu tu bal

var tabpanes = Array.from(gettabpanes);

function gettab(evn,linkid){       // linkid ka link chake pay lite dar  // evn ka param name pr bya
     
    // console.log(evn.target);
	// console.log(linkid);
 
   // for(var x=0; x<gettabpanes.length; x++){
   // 	gettabpanes[x].style.display = "none"
   // }

   tabpanes.forEach(function(tabpane){
        tabpane.style.display = "none"      // Array ma pyoung yin error tint lake mal  // so we change to array with tabpanes sir
   });

   // for(var x=0; x<gettablinks.length; x++){
   // 	gettablinks[x].className = gettablinks[x].className.replace(" active","")
   // }

   for(var x=0; x<gettablinks.length; x++){
   	gettablinks[x].className = gettablinks[x].className.replace("active","");


   	// looping 2 kar ma pat chin lot pin lar yar dar

   	getbtncloses[x].addEventListener('click',function(){
   		this.parentElement.style.display = "none"
   	});
   }

   document.getElementById(linkid).style.display = "block";

   // evn.target.className += " active";    // class name twe add chin yin append+  thoke pay ya mal and space 1 nay yar sar kwar pay ya ml
   // evn.target.className = evn.target.className.replace("tablinks","tablinks active");
  // evn.target.classList.add("active");
    
    // console.log(evn)
   // console.log(evn.target);
   // console.log(evn.currentTarget);

   evn.currentTarget.className += " active"


}


document.getElementById("autoclick").click();    //sa sa lar chin chin click win nay say chin lot // html ka id ka lal unique pyint nay ya mal

