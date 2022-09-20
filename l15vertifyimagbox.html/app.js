const database = [
      
      {
      	question:"Choose Traffic Light ?",
      	a:"./l15img/img/traffic.jpg",
      	b:"./l15img/img/mountain.jpg",
      	c:"./l15img/img/ambulance.jpg",
      	d:"./l15img/img/airport.jpg",
      	correctanswer:"a"
      },
        {
      	question:"Choose Mountain ?",
      	a:"./l15img/img/ambulance.jpg",
      	b:"./l15img/img/mountain.jpg",
      	c:"./l15img/img/traffic.jpg",     
        d:"./l15img/img/airport.jpg",
      	correctanswer:"b"
      },
        {
      	question:"Choose Ambulance Trunk ?",
      	a:"./l15img/img/mountain.jpg", 
      	b:"./l15img/img/airport.jpg",
      	c:"./l15img/img/traffic.jpg",
      	d: "./l15img/img/ambulance.jpg",   	     	
      	correctanswer:"d"
      },
        {
      	question:"Choose Airport ?",
      	a:"./l15img/img/airport.jpg",
      	b:"./l15img/img/mountain.jpg",
      	c:"./l15img/img/ambulance.jpg",
      	d:"./l15img/img/traffic.jpg",
      	correctanswer:"a"
      }
];
// console.log(database[0].a);

const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getanswers = document.querySelectorAll('.answer');
//console.log(getanswer);
var  geta_img = document.getElementById("a_img");
var getb_img = document.getElementById("b_img");
var getc_img = document.getElementById("c_img");
var getd_img = document.getElementById("d_img");
var getbtn = document.querySelector(".btn");
// console.log(getd_img);

let currentidx = 0;
let score = 0;


startquestion();


function startquestion(){

  removeselects()

  const currentqes = database[currentidx];
 //  console.log(currentqes);


  // getquestion.textContent = database[2].question;
  // geta_img.src = database[2].a;
  // getb_img.src = database[2].b;
  // getc_img.src = database[2].c;
  // getd_img.src = database[2].d;


  getquestion.textContent = currentqes.question;   // more smart than upper sir
  geta_img.src = currentqes.a;
  getb_img.src = currentqes.b;
  getc_img.src = currentqes.c;
  getd_img.src = currentqes.d;

}

function getsingleanswer(){

  let answer;
  // console.log(answer);


 // console.log(getanswers);

 getanswers.forEach(function(getanswer){
 // console.log(getanswer)

 if(getanswer.checked){
 //  console.log(getanswer.id);

 answer = getanswer.id;
 
 }

 });

// console.log(answer);

return answer;
};


//getsingleanswer();

getbtn.addEventListener('click',function(){
  // console.log("i am working");

  const answer = getsingleanswer();

  // console.log(answer);

  if(answer){
   // console.log(answer);

   if(answer === database[currentidx].correctanswer){
    score ++;
   }

   currentidx++;

   // console.log(currentidx);

   if(currentidx < database.length){
    startquestion();
   }else{
   //  console.log(score);

   getcontainer.innerHTML = `
    <h3>Total Score : ${score*25}</h3>
    <h4>You answered correctly at ${score} / ${database.length} questions.</h4>
   <!--  <button type="button" class="btn" ondblclick="location.reload()">Click to Reload</button> -->
    <button type="button" class="btn" onclick="doubleclick()">Doubleclick to Reload</button>
   `;
   }






  }else{
   window.alert("Choose One Answer");
  }

});



function removeselects(){
getanswers.forEach(function(getanswer){
    return getanswer.checked = false;
});
}

let clicktimes = 0;

function doubleclick(){                        // double click features
  // console.log("hola mosa");
  // console.log(clicktimes)
  if(clicktimes === 0){
    // clicktimes = new Date().getTime();   // getTime() for miliseconds
    clicktimes = Date.now();   // for miliseconds bal sir
   // console.log(clicktimes)
  }else{

    if((new Date().getTime() - clicktimes) < 1000){
     // console.log("hola mosa");
        location.reload();
      clicktimes = 0;
    }else{
      // clicktimes = new Date().getTime();
      clicktimes = Date.now();
    }
  }




}