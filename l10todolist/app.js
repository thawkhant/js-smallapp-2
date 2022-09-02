var getform = document.getElementById("form");
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById("list-group");




getform.addEventListener("submit",function(e){
	// console.log("hi");
	 addnew();


	e.preventDefault();
});

function addnew(todo){

  var todotext = gettextbox.value;
  // console.log(todotext);


	if(todo){
      todotext = todo.text;
	}

	if(todotext){

  const li = document.createElement("li");

  // console.log(todotext); 
  // console.log(todo.done);

  if(todo && todo.done){
      li.classList.add('done');     // this statement is from avoid overwrite right sign bro
  }

  // li.textContent = todotext;
  li.appendChild(document.createTextNode(todotext))
  //console.log(li)
  getul.appendChild(li);
  gettextbox.value= "";

  updatelocalstorage();

          
   // left click
  li.addEventListener("click",function(){
  	li.classList.toggle("done");
  	updatelocalstorage();
  });

  // right click
  li.addEventListener("contextmenu",function(){
  	li.remove();
  	updatelocalstorage();
  })
 
}

      
	}



function updatelocalstorage(){
  var getalllis = document.querySelectorAll('li');
  // console.log(getalllis);

  const todos = [];

  getalllis.forEach(function(getallli){
     todos.push({
     	text:getallli.textContent,       // pee be lr ma pee tay bu lar so dar sint lot ya aung object lay nae pay lite dar
        done:getallli.classList.contains('done')     // done so dae kaung ko phan phot
     });
  })

 // console.log(todos);

 localStorage.setItem('todos',JSON.stringify(todos));
};


var getlstodos = JSON.parse(localStorage.getItem("todos")); 
// console.log(getalllstodos);

if(getlstodos){
  getlstodos.forEach(function(getlstodo){
  //console.log(getallstodo);
  // console.log(getallstodo.text);

  addnew(getlstodo);
  });
};







// *** project note
/// parm pay htar yin localstorage ka lar mal 
/// parm ma pay htar yin textbox ka lar mal 
