function storeThisEndpoint(endpoint, name) { 
    endpoint = endpoint; // give this parameter context
    fetch(endpoint) // request the endpoing from the url
        .then(function(response) {
            return response.json();}) // bring it back in JSON format
        .then(function(parsedJson) {
            try {
                window[name + 'Endpoint'] = parsedJson; // window.exampleEndpoint
                window[name + 'Endpoint'].src_url = endpoint; // window.exampleEndpoint.src_url
                return Promise.resolve('stored ' + name + ' ' + endpoint);
            } catch (ex) {
                return Promise.reject('could not store ' + name + ' ' + endpoint);
            }
        });
}

/*
storeThisEndpoint(location.origin + location.pathname + '.json', 'product');
> productEndpoint
> productEndpoint.src_url
*/