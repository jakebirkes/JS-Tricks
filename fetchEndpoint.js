async function fetchEndPoint(url, name) {
    await fetch(url).then(resp => resp.json()).then(json => {
        window[name + 'Endpoint'] = json;
        window[name + 'Endpoint'].src_url = url;
    }).catch(console.error);
}

/*
fetchEndpoint(location.origin + location.pathname + '.json', 'product');
> productEndpoint
> productEndpoint.src_url
*/