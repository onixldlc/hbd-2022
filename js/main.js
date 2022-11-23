
function init(){
    let urlVariables = parseURLParams(String(window.location));

	let finalVariables = {"name":"Wahai Manusia", "desc":"Selamat ultah Wahai manusia, semoga sehat selalu"}

	if(urlVariables.name && urlVariables.name != ""){
        changeName(urlVariables.name);
		// finalVariables.name = convertToSecond(urlVariables.name);
	}
	if(urlVariables.desc && urlVariables.desc != ""){
        changeDesc(urlVariables.desc);
		// finalVariables.description = urlVariables.description;
	}

	return finalVariables
}

var elHint1=document.getElementsByClassName("clue-text-1")[0]
var elHint2=document.getElementsByClassName("clue-text-2")[0]
var elHint3=document.getElementsByClassName("clue-text-3")[0]

hint(elHint1, 2000, 3000)
hint(elHint2, 7000, 10000)
hint(elHint3, 19000, 10000)

function hint(element, delay1, delay2){
    setTimeout(()=>{
        element.classList.remove("off")
        setTimeout(()=>{
            element.classList.add("off")
        }, delay2)
    },delay1)
    // (element.classList.contains("off"))?element.classList.remove("off"):element.classList.add("off")
}

function changeName(name){
    let title = `HBD ${name}`;
    titleWeb.innerHTML = title;
    document.getElementById("name").innerHTML=title;
    document.getElementById("nameReflection").innerHTML=title;
}

function changeDesc(desc){
    let descReflcEl = document.getElementById("descReflection");
    let descEl = document.getElementById("desc");
    
    descEl.innerHTML=desc;
    descReflcEl.innerHTML=desc;
    if(desc.length > 20){descReflcEl.classList.add("off")};
}

let isPlaying = 0

function startMusic(){
    if(!isPlaying){
        playMusic()
        isPlaying=1
    }
}

function onOff(){
    let items = Array.from(document.getElementsByClassName("text-item-container"));
    items.forEach((element)=>{
        (element.classList.contains("off"))?element.classList.remove("off"):element.classList.add("off")
    })
}

var datas = init();