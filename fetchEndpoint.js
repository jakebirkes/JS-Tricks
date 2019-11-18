function fetchEndpoint(endpoint, name) {

    return fetch(endpoint).then(resp => resp.json()).then(json => {
        window[name + 'Endpoint'] = json;
        window[name + 'Endpoint'].src_url = endpoint;
    }).catch(console.error);
    
};

/*
fetchEndpoint(location.origin + location.pathname + '.json', 'product');
> productEndpoint
> productEndpoint.src_url
*/