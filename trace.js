function trace(output, random) {
    if (random !== undefined) {
        console.trace("%c" + output, "color:#00FF7F");
    } else {
        console.log("%c" + output, "color:#00FF7F");
    }
}