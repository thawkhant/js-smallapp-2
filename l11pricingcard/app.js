const getcheckbox = document.getElementById("toggle-checkbox");
const getchecklabel = document.getElementById("toggle-label");
const getbasic = document.getElementById("basic");
const getpro = document.getElementById("pro");
const getmst = document.getElementById("mst");

 getchecklabel.addEventListener('click',function(){
 	// console.log("hi");

 	if(getcheckbox.checked){
 		// console.log(getcheckbox);
 		// console.log(getcheckbox.checked)
   //      getbasic.textContent = 10;
 		// getpro.textContent = 20;
 		// getmst.textContent = 30;

 		[getbasic.textContent,getpro.textContent,getmst.textContent] = [10,20,30]

 	}else{
 		// console.log(getcheckbox);
 		// console.log(getcheckbox.checked)

 		getbasic.textContent = 120;
 		getpro.textContent = 240;
 		getmst.textContent = 360;
 	}
 })