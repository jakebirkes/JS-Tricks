async function regexStoreEndpoint(url, name, regex) {
    if (regex.test(location.href)) {
        await fetch(url).then(resp => resp.json()).then(json => {
            window[name + 'Endpoint'] = json;
            window[name + 'Endpoint'].src_url = url;
        }).catch(console.error);
    }
    else {
        return console.log("regexStoreEndpoint(): url did not match " + regex);
    }
}