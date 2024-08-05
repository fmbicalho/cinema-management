const apiKey = '1cded75c';

async function fetchData() {
    const keys = ["star", "zombie", "potter", "mother", "evil", "ghost", "jackson", "rings", "dragon"];
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const num = getRandomInt(keys.length);
    const api = `https://www.omdbapi.com/?s=${keys[num]}&apikey=${apiKey}`;
    const response = await fetch(api);
    const body = await response.json();

    if (!response.ok || body.Response === "False") {
        throw new Error(body.Error);
    }
    return body.Search;
}

async function getFilm(index) {
    const films = await fetchData();
    console.log(films);
    return films[index];
}

async function getFilms() {
    return await fetchData();
}

export default { getFilm, getFilms };
