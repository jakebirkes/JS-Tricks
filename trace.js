function trace(string, random) {
    if (random !== undefined) {
        console.trace("%c" + string, "color:#00FF7F");
    } else {
        console.log("%c" + string, "color:#00FF7F");
    }
}