function mapCharacterStatus(characterStatus) {
    switch (characterStatus) {
        case "Alive":
            return {
                color: "success"
            };
        case "Dead":
            return {
                color: "danger"
            };
        default:
            return {
                color: "secondary"
            };
    }
}

async function renderFooterContent() {
    const totalCharacters = await getTotalByFeature("character");
    const totalLocations = await getTotalByFeature("location");
    const totalEpisodes = await getTotalByFeature("episode");


    const spanTotalCharacters = document.getElementById("total-characters");
    spanTotalCharacters.innerText = totalCharacters;

    const spanTotalLocations = document.getElementById("total-locations");
    spanTotalLocations.innerText = totalLocations;

    const spanTotalEpisodes = document.getElementById("total-episodes");
    spanTotalEpisodes.innerText = totalEpisodes;

    const spanDevName = document.getElementById("dev-name");
    spanDevName.innerText = "Ana Vitória";

    const spanCurrentYear = document.getElementById("current-year");
    spanCurrentYear.innerText = new Date().getFullYear()
 
};