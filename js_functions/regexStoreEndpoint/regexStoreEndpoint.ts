async function regexStoreEndpoint(url: string, name: string, regex: RegExp) {
    if (regex.test(location.href)) {
        await fetch(url).then(resp => resp.json()).then(json => {
            window[name + 'Endpoint'] = json;
            window[name + 'Endpoint'].src_url = url;
            console.log("regexStoreEndpoint(): url successfully matched " + regex + " & fetched " + name + "Endpoint");
        }).catch(console.error);
    } else {
        return console.log("regexStoreEndpoint(): url did not match " + regex);
    }
}