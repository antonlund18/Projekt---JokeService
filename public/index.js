// index.js
async function main() {
    try {
        let jokes = await get('/api/jokes');
        document.body.innerHTML = await generateTable(jokes, '/index.hbs');
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
    document.getElementById("addJoke").onclick = () => { post("/api/jokes", {author: "Anton", setup: "hej", punchline: "hejsa", score: 1}); main(); };
}

async function otherJokes(address) {
    try {
        let jokes = await get(address + '/api/jokes');
        document.body.innerHTML = await generateTable(jokes, '/jokes.hbs');
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

main();