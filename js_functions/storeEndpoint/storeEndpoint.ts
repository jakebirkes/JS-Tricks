async function storeEndpoint(url: string, name: string, isJSON: boolean, requiresProxy: boolean) {
    isJSON = isJSON || false;
    requiresProxy = requiresProxy || false;
    requiresProxy ? url = 'https://cors-anywhere.herokuapp.com/' + url : url = url;
    await fetch(url).then(resp => isJSON ? resp.json() : resp.text()).then(e => {
        window[name + 'Endpoint'] = e;
        window[name + 'Endpoint'].src_url = url;
    }).catch(console.error);
}
