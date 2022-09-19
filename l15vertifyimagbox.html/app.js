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
      	c:"./l15img/img/ambulance.jpg",
      	b:"./l15img/img/mountain.jpg",
      	a:"./l15img/img/traffic.jpg",     
        d:"./l15img/img/airport.jpg",
      	correctanswer:"b"
      },
        {
      	question:"Choose Ambulance Trunk ?",
      	c:"./l15img/img/ambulance.jpg",
      	d:"./l15img/img/airport.jpg",
      	a:"./l15img/img/traffic.jpg",
      	b:"./l15img/img/mountain.jpg",     	     	
      	correctanswer:"a"
      },
        {
      	question:"Choose Airport ?",
      	a:"./l15img/img/traffic.jpg",
      	b:"./l15img/img/mountain.jpg",
      	c:"./l15img/img/ambulance.jpg",
      	d:"./l15img/img/airport.jpg",
      	correctanswer:"d"
      },
];

// console.log(database[0].a);

const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getanswer = document.querySelectorAll('.answer');
//console.log(getanswer);
const geta_img = document.getElementById("a_img");
const getb_img = document.getElementById("b_img");
const getc_img = document.getElementById("c_img");
const getd_img = document.getElementById("d_img");
// console.log(geta_img);


startquestion();


function startquestion(){
  getquestion.textContent = database[0].question;
  geta_img.src = database[0].a;
  getb_img.src = database[0].b;
  getc_img.src = database[0].c;
  getd_img.src = database[0].d;
}