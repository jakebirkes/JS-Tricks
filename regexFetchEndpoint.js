function regexfetchEndpoint(endpoint, name, regex) {

    if (regex.test(location.href)) {
        return fetch(endpoint).then(resp => resp.json()).then(json => {
            window[name + 'Endpoint'] = json;
            window[name + 'Endpoint'].src_url = endpoint;
            console.log("fetched " + name + "Endpoint");
        }).catch(console.error);
    } else {
        return console.error("did not fetch " + name + "Endpoint");
    }
    
};