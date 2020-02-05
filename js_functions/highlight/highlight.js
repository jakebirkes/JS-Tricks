function highlight(msg, clr) {
    if (clr) {
        console.log("%c" + msg, `color:${clr}`);
    } else {
        console.log("%c" + msg, "color:#00FF7F");
    }
}