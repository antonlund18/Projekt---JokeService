async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(url, joke) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(joke),
        headers: { 'Content-Type': 'application/json' }
    });
    if(response.status !== 200) {
        throw new Error(response.status);
    }
    return await response.json();
}

async function deLete(url) {
    let response = await fetch(url, {
        method: "DELETE"
    });
    if(response !== 200) {
        throw new Error(response.status);
    }
    return await response.json();
}

async function getText(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.text();
}

async function generateTable(objects, address) {
    let template = await getText(address);
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({objects});
}
