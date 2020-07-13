async function storeEndpoint(url, name, isJSON, requiresProxy) {
    isJSON = isJSON || false;
    requiresProxy = requiresProxy || false;
    requiresProxy ? url = 'https://cors-anywhere.herokuapp.com/' + url : url = url;
    const resp = await fetch(url);
    const e = isJSON ? await resp.json() : await resp.text();
    window[name] = e;
    window[name].src_url = url;
}
