async function regexStoreEndpoint(url: string, name: string, regex: RegExp, isJSON: boolean, requiresProxy: boolean) {
    if (regex.test(location.href)) {
        isJSON = isJSON || false;

        requiresProxy = requiresProxy || false;
        requiresProxy ? url = 'https://cors-anywhere.herokuapp.com/' + url : url = url;

        const resp = await fetch(url);
        const e = isJSON ? await resp.json() : await resp.text();

        window[name] = e;
        window[name].src_url = url;
    } else {
        console.log("regexStoreEndpoint(): url did not match " + regex)
    }
}
