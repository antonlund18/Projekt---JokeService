async function main() {
    try {
        let sites = await get('https://krdo-joke-registry.herokuapp.com/api/services');
        document.body.innerHTML = await generateTable(sites, '/other.hbs');
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

main();