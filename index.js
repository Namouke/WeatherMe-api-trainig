
async function fetchCityData(cityName) {
    const url = `https://geo.api.gouv.fr/communes?nom=${cityName}&fields=nom,centre,departement&limit=1`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0) {
            const city = data[0];
            console.log("Ville :", city.nom)
            console.log("Code Postal :", city.departement);
            console.log("Latitude :", city.centre.coordinates[1]);
            console.log("Longitude :", city.centre.coordinates[0]);
        }

        else {
            console.log("Aucune ville trouvée");
        }
    } catch (error) {
        console.error("Erreur lors de l'appel API :", error);
    }
}

fetchCityData("Dijon");
