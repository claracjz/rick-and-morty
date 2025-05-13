document.addEventListener("DOMContentLoaded", main);
document.getElementById("btn-return").addEventListener("click", returnToMainPage)


function main() {
    const params = new URLSearchParams(window.location.search);

    const characterId = params.get("character");

    if (!characterId) {
        window.location.href = "index.html";
    }

    loadMainContent(characterId);
    renderFooterContent();
}

async function loadMainContent(characterId){
    const character = await getCharacterById(characterId);

    const lastEpisodeUrl = character.episode[character.episode.length - 1];

    const episodeName = await getEpisodeDataFromURL(lastEpisodeUrl);

    character.episode = {
        url: lastEpisodeUrl,
        name: episodeName,
    };

    renderCharacterCard(character);
}

function renderCharacterCard(character) {
    const row = document.getElementById("character-detail");
    row.innerHTML = "";

    const card = `
    <div class="card mb-3 character-card">
                        <div class="row g-0">
                          <div class="col-12 col-md-5">
                            <div class="object-fit-fill border rounded h-100">
                                <img src="${character.image}" 
                                class="w-100 h-100 rounded" alt="${character.name}">
                            </div>
                          </div>
                          <div class="col-12 col-md-7">
                            <div class="card-body fw-bolder">
                              <h2 class="card-title">${character.name}</h2>

                              <p class="card-text">
                                <small>
                                    <i id="circle-status" class="bi bi-circle-fill text-${mapCharacterStatus(character.status).color}"></i>
                                    <span>${character.status} - ${character.species}</span>
                                </small>
                              </p>

                              <p class="card-text">
                                <small class="text-secondary">Última localização conhecida:</small><br>
                                <small>${character.location.name}</small>
                            </p>
                            <p class="card-text">
                                <small class="text-secondary">Visto a última vez em:</small><br>
                                <small>${character.episode.name}</small>
                            </p>
                            </div>
                          </div>
                        </div>
                      </div>
    
    `

    const col = document.createElement("div");
    col.classList.add("col-10");
    col.innerHTML = card;

    row.appendChild(col);
}

function returnToMainPage() {
    window.location.href = "index.html"
}