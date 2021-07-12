var Lines = ["crow0"];
let IdActualRow = Lines[Lines.length-1];
let ActualRow = document.getElementById(IdActualRow);

function cowsay($value){
 let cowId = document.getElementsByClassName("console__row").length;
	var ascii = document.createElement('div');
	var $value = $value.split("cowsay ")[1];
	var top= '';
	var bottom= '';
	for(let i = 0; i < $value.length; i++){
		bottom+="-";
		if(top.length<$value.length-2 || $value.length<3){
			top+='_';
		}
	}
	ascii.className = 'input_line';
	ascii.innerHTML = `<div class="path">
							<span>root@antoncovu.fr</span>
						</div>
						<div class="separator">
							<span class="dbldot">:</span>
							<span class="wave">~</span>
							<span class="dollar">$</span>
						</div>
						<div class="container__output">
<pre>   `+top+`
&lt;` + $value + `&gt;
    `+ bottom+ `
         \\   ^__^
          \\  (oo)\\_______
             (__)\\               )\\/\\
                 ||----------w,|
                 ||                ||</pre>
						</div>`;
	var cowntainer = document.getElementById("console");
    cowntainer.appendChild(ascii);
}


function portfolio(){
	document.location.href="http://antoncovu.fr/test/";
}

function cmatrix(){
	let rowId = document.getElementsByClassName("console__row").length;
	var someMatrix = document.createElement('div');
	clear();
	someMatrix.className = 'input_line';
	someMatrix.innerHTML = `<div class="container__output"><canvas></div>`;
	var matrixtainer = document.getElementById("console");
    matrixtainer.appendChild(someMatrix);
    matrixit();
}

function help(){
	let rowId = document.getElementsByClassName("console__row").length;
	var someHelp = document.createElement('div');
	someHelp.className = 'input_line';
	someHelp.innerHTML = `<div class="path">
							<span>root@antoncovu.fr</span>
						</div>
						<div class="separator">
							<span class="dbldot">:</span>
							<span class="wave">~</span>
							<span class="dollar">$</span>
						</div>
						<div class="container__output">
							<input class="console__row" id="crow`+ rowId +`" type="text" disabled value="Voici une liste des commandes disponibles:">
							<input class="console__row" id="crow`+ rowId +`" type="text" disabled value="cls -- Nettoie la fenêtre de dialogue.">
							<input class="console__row" id="crow`+ rowId +`" type="text" disabled value="help -- Liste les commandes existantes et leur description.">
							<input class="console__row" id="crow`+ rowId +`" type="text" disabled value="portfolio -- Vous emmenera sur la page internet concernant mes réalisations.">
							<input class="console__row" id="crow`+ rowId +`" type="text" disabled value="ls -- Liste des pages de mon site internet">
						</div>`;
	var container = document.getElementById("console");
    container.appendChild(someHelp);
}

function clear(){
	document.getElementById('console').innerHTML = "";
}

function execution(Id){
let IdActualRow = Lines[Lines.length-1];
let ActualRow = document.getElementById(IdActualRow);
document.getElementById(Id).id = Id;
document.getElementById(Id).disabled = true;
console.log(ActualRow.value);
if(ActualRow.value === "cls") {
	clear();
}
	else if (ActualRow.value === "help") {
	 	help();
	 	}
	 	else if(ActualRow.value === "portfolio") {
	 		portfolio();
	 	}
	 	else if(ActualRow.value === "cmatrix") {
	 		cmatrix();
	 	}
	 	else if(ActualRow.value.includes("cowsay")) {
	 		cowsay(ActualRow.value);
	 	}
 else {
 	help();
 }
}

function generateLine(){
	let rowId = document.getElementsByClassName("console__row").length;
	var newline = document.createElement('div');
	newline.className = 'input_line';
	newline.innerHTML = `<div class="path">
							<span>root@antoncovu.fr</span>
						</div>
						<div class="separator">
							<span class="dbldot">:</span>
							<span class="wave">~</span>
							<span class="dollar">$</span>
						</div>
						<div class="container__output">
							<input autocomplete="off" class="console__row" id="crow`+ rowId +`" type="text">
						</div>`;

	var container = document.getElementById("console");
    container.appendChild(newline);
    setListener("crow" + rowId);
    document.getElementById("crow" + rowId).focus();
    Lines.push("crow" + rowId);
}

function setListener(Id){
var input = document.getElementById(Id);
input.addEventListener("keydown", (e) => {
	if (e.keyCode === 13) {
		 execution(Id);
		 generateLine();
	}
})
}

function matrixit(){
const f = document.getElementsByClassName("container__output");
let q = document.getElementsByTagName("canvas")[0];
const s = f[0];
const w = (q.width = s.clientWidth);
const h = (q.height = window.innerHeight*0.8);
console.log(window);
const ctx = q.getContext("2d");

const p = Array(Math.floor(w / 10) + 1).fill(0);

const random = (items) => items[Math.floor(Math.random() * items.length)];

const hex = "ANTONCOVU".split("");

setInterval(() => {
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#0f0";
  p.map((v, i) => {
    ctx.fillText(random(hex), i * 10, v);
    p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
  });
}, 1000 / 30);
}

setListener("crow0");


