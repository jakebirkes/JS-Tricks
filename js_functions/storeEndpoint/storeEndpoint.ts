async function storeEndpoint(url:string, name:string) {
    await fetch(url).then(resp => resp.json()).then(json => {
        window[name + 'Endpoint'] = json;
        window[name + 'Endpoint'].src_url = url;
    }).catch(console.error);
}