// index.js
async function main() {
    await generateDefaultHTML();
    post('https://krdo-joke-registry.herokuapp.com/api/services', { name: "Jokey Dokey", address: "https://dip-jokeservice.herokuapp.com/", secret: "tophemmeligt"});
}

async function otherJokes(id) {
    try {
        let jokes = await get('/api/othersites/' + id);
        document.getElementById("jokes").innerHTML = await generateTable(jokes, '/jokes.hbs');
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

async function addJoke() {
    let joke = {
        setup: document.getElementById("setup").value,
        punchline: document.getElementById("punchline").value,
        author: document.getElementById("author").value
    }
    await post('api/jokes', joke);
    generateDefaultHTML();
}

async function generateDefaultHTML() {
    try {
        let jokes = await get('/api/jokes');
        document.body.innerHTML = await generateTable(jokes, '/index.hbs');
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
    try {
        let sites = await get('/api/othersites');
        document.getElementById("othersites").innerHTML = await generateTable(sites, '/sites.hbs');
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

main();