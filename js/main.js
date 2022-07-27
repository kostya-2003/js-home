"use strict";

const poster = document.querySelector("header img");
const adv = document.querySelectorAll("#main_promo .mp");
const pageTitle = document.querySelector("title");
const films = document.querySelector("#films");

const _DB = {
	movies: [
		"Logan", "Spider-Men", "The Seven Samurai",
		"Bonnie and Clide", "Reservoir Dogs", "Doctor Zhivage", 
		"The Deer Hunter", "Rocky", "Crid"
	]
};

poster.src = "img/bg2.jpg";
poster.alt = "Hitman's Wife's Bodyguard";
adv.forEach(adv => adv.remove());
pageTitle.textContent = poster.alt;

_DB.movies.forEach((film,index) => {
	films.innerHTML += `
		<p>
			${index + 1}.${film} 
			<span data-rm>&#128465</span>
		</p>
	`;
	document.querySelectorAll("[data-rm]")
	.forEach(trashBtn => {
		trashBtn.addEventListener("click", (e) => {
			e.target.parentElement.remove();
		});
	});
});

const input = document.querySelector("#add input");
const mainPromo = document.getElementById("main_promo");
const title = document.createElement("h1");
mainPromo.append(title);

input.addEventListener("input", (e) => {
	title.textContent = e.target.value;
});
