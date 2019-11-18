function fetchMalformedEndpoint(endpoint, name) {

    return fetch(endpoint).then(resp => resp.text()).then(text => {
        text = text.replace(/\r?\n/g, ' ');
        window[name + 'Endpoint'] = JSON.parse(text);
        window[name + 'Endpoint'].src_url = endpoint;
    }).catch(console.error);
    
};

/*
fetchEndpoint(location.origin + location.pathname + '.json', 'product');
> productEndpoint
> productEndpoint.src_url
*/