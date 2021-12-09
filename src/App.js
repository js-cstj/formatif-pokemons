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
			// while (app.firstChild !== null) {
			// 	app.firstChild.remove();
			// }
			this.reset();
			this.chargerJson('http://mboudrea.tim-cstj.ca/epreuve3/pokemon.php?mot='+mot).then(donnees => {
				// console.log(donnees);
				var h1 = app.appendChild(document.createElement("h1"));
				h1.innerHTML = "Mes Pokémons trouvés";
				app.appendChild(this.html_listePokemons(donnees.pokemons));
			});
		});
	}
	/**
	 * Fonction reset. Enlève le contenu de la zone d'affichage
	 * @note Cette fonction est complète.
	 * @returns {undefined} Ne retourne rien
	 */
	 static reset() {
		var app = document.getElementById("app");
		while (app.firstChild) {
			app.firstChild.remove();
		}
	}

	/**
	 * Fonction html_listePokemons. Retourne le HTML de l'ensemble des Pokémons en fonction du tableau donné
	 * @param {array} tPokemons Tableau contenant des objets avec le nom du Pokémon, sa description, son image...
	 * @returns HTMLElement Le div#pokemons
	 */
	static html_listePokemons(tPokemons) {
		// console.log(tPokemons);
		var resultat = document.createElement("div");
		resultat.id = "pokemons";
		for (let i = 0; i < tPokemons.length; i++) {
			const objPokemon = tPokemons[i];
			// console.log(objPokemon);
			resultat.appendChild(this.html_pokemon(objPokemon));
		}
		return resultat;
	}
	/**
	 * Fonction html_pokemon. Retourne le div.pokemon d'un Pokémon
	 * @param {object} objPokemon Les données d'un Pokémon sous forme d'objet
	 * @returns HTMLElement Un div.pokemon
	 */
	static html_pokemon(objPokemon) {
		// console.log(objPokemon);
		var divPokemon = document.createElement("div");
		divPokemon.classList.add("pokemon");
		divPokemon.appendChild(this.html_nom(objPokemon.nom));
		divPokemon.appendChild(this.html_description(objPokemon.description));
		divPokemon.appendChild(this.html_image(objPokemon.image_url, objPokemon.nom));
		return divPokemon;
	}
	/**
	 * Fonction html_nom. Retourne le h2.nom contenant le texte fourni
	 * @param {string} nom Le nom du Pokémon
	 * @returns HTMLElement Un h2.nom
	 */
	static html_nom(nom) {
		// console.log(nom);
		var resultat = document.createElement("h2");
		resultat.classList.add("nom");
		resultat.innerHTML = nom;
		return resultat;
	}
	/**
	 * Fonction html_description. Retourne le p.description contenant le texte fourni
	 * @param {string} description La description du Pokémon
	 * @returns HTMLElement Un p.description
	 */
	static html_description(description) {
		// console.log(description);
		var resultat = document.createElement("p");
		resultat.classList.add("description");
		resultat.innerHTML = description.replace(/<br\/>/g, " ");
		return resultat;
	}
	/**
	 * Fonction html_image. Retourne le div.image contenant l'image dont l'adresse est fournie.
	 * @param {string} image_url L'adresse de l'image
	 * @param {string} alt Le alt à appliquer à l'image
	 * @returns HTMLElement Un div.image
	 */
	static html_image(image_url, alt = "") {
		// console.log(image_url, alt);
		var resultat = document.createElement("div");
		resultat.classList.add("image");
		var img = resultat.appendChild(document.createElement("img"));
		img.alt = alt;
		if (image_url === "") {
			img.src = "http://mboudrea.tim-cstj.ca/epreuve3/pokemons/pokeball.png";
		} else {
			img.src = image_url;
		}
		return resultat;
	}
	/**
	 * Retourne une promesse résolue au chargement du fichier json à l'adresse fournie.
	 * @param {string} url 
	 * @returns json
	 */
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
