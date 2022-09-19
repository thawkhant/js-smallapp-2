const getmap = document.querySelector(".map-container");

var getsmallcolor = document.getElementById("smallcolor"),
    getmediumcolor = document.getElementById("mediumcolor"),
    getlargecolor = document.getElementById("largecolor");

  var circleidx = 0;


getmap.addEventListener("click",function(e){
	circleidx++;

	// console.log("hie hie");

	// console.log(e.target)   // span tag ko hti mi nay lot

	if(e.target.classList.contains("map-container")){   // this condition is to avoid span tag ko hti mi dar
		const cx = e.clientX;
	const cy = e.clientY;
	// console.log(cx,cy);
    
    const mapleft = e.target.offsetLeft;
	const maptop = e.target.offsetTop;

	// console.log(maptop,mapleft);

	const curx = cx - mapleft;
	const cury = cy- maptop;
	// console.log(curx,cury);

	const circle = document.createElement('span');
	circle.id = circleidx;
	circle.classList.add("circle");
	// console.log(circle);
    
    circle.style.left = `${curx}px`;
    circle.style.top = `${cury}px`;
   
   // to change color   // js ka nay change chin yin root nat pay lot ya dal // overwrte lote yin paw

    // circle.style.setProperty('--small-color','darkblue');
    // circle.style.setProperty('--medium-color','steelblue');
    // circle.style.setProperty('--large-color','skyblue');
    

  // console.log(getsmallcolor.value);

    // console.log(getsmallcolor.selectedIndex);   // to get select value

    if(getsmallcolor.selectedIndex > 0 && getmediumcolor.selectedIndex >0 && getlargecolor.selectedIndex >0){
    	circle.style.setProperty('--small-color',getsmallcolor.value);
    	circle.style.setProperty('--medium-color',getmediumcolor.value);
    	circle.style.setProperty('--large-color',getlargecolor.value)
    }

     
	 e.target.appendChild(circle);
	// this.appendChild(circle)    // nout ta myo lot pya dar pr sir

	}

	removepointer(e);      // if condition htal ka har ka span ko ma ti lot a pyin ka call pay lite dar
});

function removepointer(e){
// console.log(e.target);
// console.log(e.target.id);  // id dwe ka 1 ka sa dal

if(e.target.id>0){
 e.target.remove();
}
}