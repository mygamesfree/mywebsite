let input = document.getElementById("search_game");
let button = document.querySelector(".search-box button");
let results = document.getElementById("results");

let games = [

{name:"Max Payne", page:"max-payne.html"},
{name:"MXGP - The Official Motocross Videogame", page:"motocros.html"},
{name:"Dragon Ball Z SAGAS", page:"ball.html"},
{name:"Bully Scholarship", page:"bully.html"},
{name:"Mortal Kombat Trilogy", page:"mortal.html"},
{name:"Blur", page:"blur.html"},
{name:"Pes 2015", page:"pes2015.html"},
{name:"Hollow Knight: Silksong", page:"hollow.html"},
{name:"Far Cry 3", page:"farcry3.html"},
{name:"Payday 2", page:"payday.html"},
{name:"Call of Duty: World at War", page:"cod-waw.html"},
{name:"PES 2017", page:"pes2017.html"},
{name:"Far Cry 2", page:"farcr2.html"},
{name:"GTA San Andreas", page:"gtasa.html"},
{name:"Call of Duty Ops", page:"codops.html"},
{name:"Assassin's Creed IV Black Flag", page:"Assassin's-bladflag.html"},
{name:"Need for Speed Most Wanted", page:"ndfM.html"},
{name:"Need for Speed The Run", page:"NFDRUN.html"},
{name:"Mafia 2", page:"mafia2.html"},
{name:"God of War 2", page:"godofwar2.html"},
{name:"Assassin's Creed 3", page:"as3.html"},
{name:"Euro Truck Simulator 2", page:"eorotruck.html"},
{name:"Little Nightmares", page:"little.html"},
{name:"Dark Souls Prepare to Die Edition", page:"dark.html"},
{name:"Call of Duty 4 Modern Warfare", page:"codmd4.html"},
{name:"Call of Duty Modern Warfare 3", page:"codmd3.html"},
{name:"Need for Speed Underground 2", page:"ndfu2.html"},
{name:"Need for Speed Pro Street", page:"ndfpro.html"}

];

function searchGame(){

let value = input.value.toLowerCase();

results.innerHTML = "";

if(value === "") return;

let found = false;

for(let game of games){

if(game.name.toLowerCase().includes(value)){

results.innerHTML += `
<a href="${game.page}" class="result-item">${game.name}</a>
`;

found = true;

}

}

if(!found){
results.innerHTML = `<p class="no-result">No Game Found</p>`;
}

}

input.addEventListener("keyup", searchGame);
button.addEventListener("click", searchGame);

input.addEventListener("keypress", function(e){
if(e.key === "Enter"){
searchGame();
}
});
