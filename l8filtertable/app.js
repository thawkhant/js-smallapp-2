var getinput = document.getElementById("search");
var getul = document.getElementById("members");
var getli = getul.getElementsByTagName("li");
// console.log(getli);   // HTML Collection  // HTML collection ka forEach nae pat ma ya bu for loop nat pat paw lol



getinput.addEventListener('keyup',filter);

function filter(){
	// console.log(this.value);


	var inputfilter = this.value.toLowerCase();
	// console.log(inputfilter);

	for(var x=0; x<getli.length; x++){
		// console.log(getli[x]);
		// console.log(getli[x].querySelector('a').innerText.toLowerCase());   // li htal ka a ko sin dar like waterfall
		// console.log(getli[x].getElementsByTagName('a')[0].textContent.toLowerCase())  // Array nae twint lot

		var getavalue = getli[x].querySelector('a').innerText.toLowerCase();

		if(getavalue.indexOf(inputfilter) > -1){            // Array ka 0 bl shi dal 
          getli[x].style.display = "";
		}else{
          getli[x].style.display = "none";
		}
	} 
}



var getsortazm1btn = document.getElementById('sortazm1');
var getsortzam1btn = document.getElementById('sortzam1');
var getsortazm2btn = document.getElementById('sortazm2');
var getsortzam2btn = document.getElementById('sortzam2');

getsortazm1btn.addEventListener('click',sortingazm1);

getsortzam1btn.addEventListener('click',sortingzam1);


getsortazm2btn.addEventListener('click',sortingazm2);

getsortzam2btn.addEventListener('click',sortinzam2)

function sortingazm1(){
	// console.log('hi');

	var lis = [];

	for(var i=0; i<getli.length; i++){
		// console.log(getli[i]);
		// console.log(getli[i].textContent);

		lis.push(getli[i].textContent);
	}

	// console.log(lis);
	// console.log(lis.sort());
	// console.log(lis.sort().reverse());

	var azlis = lis.sort();

	getul.innerHTML = "";

	azlis.forEach(function(azli){
		// console.log(azli);

		const newli = document.createElement('li');
		const newlink = document.createElement("a");
		newlink.href = `javascript:void(0);`;
		newlink.appendChild(document.createTextNode(azli));
		newli.appendChild(newlink);
		getul.appendChild(newli)
		 //console.log(newlink)
		// console.log(newli)
	});


}


function sortingzam1(){
	var lis = [];

	for(var i=0; i<getli.length; i++){
		lis.push(getli[i].textContent);
	}

	var azlis = (lis.sort().reverse());

	getul.innerHTML = "";

	azlis.forEach(function(azli){
		// console.log(azli);

		const newli = document.createElement('li');
		const newlink = document.createElement("a");
		newlink.href = `javascript:void(0);`;
		newlink.appendChild(document.createTextNode(azli));
		newli.appendChild(newlink);
		getul.appendChild(newli);
	});


}


// Method 2


function sortingazm2(){
	// console.log("hi");
   
   var shouldswitch = true;
   var switching = true;

   // console.log(getli.length);

   do{

     switching = false;
     
     var i = 0;

     for(i; i<getli.length-1; i++){    //-1 ka error phan lite dar a nout sone value ko shoung phot
        // console.log(i)   // han twar lake mal

        shouldswitch = false;  //ma shwe thint tay buu out ka condition ko kyi oak
       

         // like switch on switch 
        if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){
           shouldswitch = true;
           break;
        }
     }



     if(shouldswitch){
                      //method1                       //method2
           //  element.insertBefore(new,existing); node.insertBefore(new,existing);   //nay yar a pyong a lal a twint
               
               getli[i].parentElement.insertBefore(getli[i+1],getli[i]);



     	switching = true;
     }

   }while(switching)

}



// M2 z to a

function sortinzam2(){
	// console.log("hi");
   
   var shouldswitch = true;
   var switching = true;

   // console.log(getli.length);

   do{

     switching = false;
     
     var i = 0;

     for(i; i<getli.length-1; i++){    //-1 ka error phan lite dar a nout sone value ko shoung phot
        // console.log(i)   // han twar lake mal

        shouldswitch = false;  //ma shwe thint tay buu out ka condition ko kyi oak
       

         // like switch on switch 
        if(getli[i].textContent.toLowerCase() < getli[i+1].textContent.toLowerCase()){
           shouldswitch = true;
           break;
        }
     }



     if(shouldswitch){
                      //method1                       //method2
           //  element.insertBefore(new,existing); node.insertBefore(new,existing);   //nay yar a pyong a lal a twint
               
               getli[i].parentElement.insertBefore(getli[i+1],getli[i]);



     	switching = true;
     }

   }while(switching)

}



//console.log(getli[0].textContent.toLowerCase());
// console.log(getli[1].textContent.toLowerCase());

//                        // Aung Aung        // Maung Maung    //Ngal dae lu dwe ko a paw mar htar ya mal
// if(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase()){
// 	console.log('true')
// }else if(getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()){
// 	console.log("equal")
// }else{
// 	console.log('false')
// }
