async function storeEndpoint(url: string, name: string, isJSON = false, requiresProxy = false) {
    requiresProxy ? url = 'https://cors-anywhere.herokuapp.com/' + url : url = url;

    const resp = await fetch(url);
    const e = isJSON ? await resp.json() : await resp.text();

    window[name] = e;
    window[name].src_url = url;
}
