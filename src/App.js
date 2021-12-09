/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		this.chargerJson('http://mboudrea.tim-cstj.ca/epreuve3/pokemon.php').then(donnees => {
			// console.log(donnees);
			var h1 = app.appendChild(document.createElement("h1"));
			h1.innerHTML = "Mes Pokémons";
			app.appendChild(this.html_listePokemons(donnees.pokemons));
		});
		document.getElementById("search").addEventListener("submit", e => {
			// console.log(e.currentTarget.mot.value);
			var mot = e.currentTarget.mot.value;
			while (app.firstChild !== null) {
				app.firstChild.remove();
			}
			this.chargerJson('http://mboudrea.tim-cstj.ca/epreuve3/pokemon.php?mot='+mot).then(donnees => {
				console.log(donnees);
				var h1 = app.appendChild(document.createElement("h1"));
				h1.innerHTML = "Mes Pokémons trouvés";
				app.appendChild(this.html_listePokemons(donnees.pokemons));
			});
		});
	}
	static html_listePokemons(tPokemons) {
		// console.log(tPokemons);
		var resultat = document.createElement("div");
		resultat.id = "pokemons";
		for (let i = 0; i < tPokemons.length; i++) {
			const objPokemon = tPokemons[i];
			// console.log(objPokemon);
			var divPokemon = resultat.appendChild(document.createElement("div"));
			divPokemon.classList.add("pokemon");
			var h2 = divPokemon.appendChild(document.createElement("h2"));
			h2.innerHTML = objPokemon.nom;
			var p = divPokemon.appendChild(document.createElement("p"));
			p.innerHTML = objPokemon.description.replace(/<br\/>/g, " ");
			var divImage = divPokemon.appendChild(document.createElement("div"));
			divImage.classList.add("image");
			var img = divImage.appendChild(document.createElement("img"));
			img.alt = objPokemon.nom;
			if (objPokemon.image_url === "") {
				img.src = "http://mboudrea.tim-cstj.ca/epreuve3/pokemons/pokeball.png";
			} else {
				img.src = objPokemon.image_url;
			}
		}
		return resultat;
	}
	static chargerJson(url) {
		return new Promise(resolve => {
			var xhr = new XMLHttpRequest();
			xhr.open("get", url);
			xhr.responseType = "json";
			xhr.addEventListener("load", e => {
				resolve(e.target.response); // Retourne les données
			});
			xhr.send();
		});
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();
