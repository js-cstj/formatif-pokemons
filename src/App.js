/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
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


	/**
	 * Fonction html_pokemon. Retourne le div.pokemon d'un Pokémon
	 * @param {object} objPokemon Les données d'un Pokémon sous forme d'objet
	 * @returns HTMLElement Un div.pokemon
	 */
	

	/**
	 * Fonction html_nom. Retourne le h2.nom contenant le texte fourni
	 * @param {string} nom Le nom du Pokémon
	 * @returns HTMLElement Un h2.nom
	 */
	

	/**
	 * Fonction html_description. Retourne le p.description contenant le texte fourni
	 * @param {string} description La description du Pokémon
	 * @returns HTMLElement Un p.description
	 */
	

	/**
	 * Fonction html_image. Retourne le div.image contenant l'image dont l'adresse est fournie.
	 * @param {string} image_url L'adresse de l'image
	 * @param {string} alt Le alt à appliquer à l'image
	 * @returns HTMLElement Un div.image
	 */
	

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
