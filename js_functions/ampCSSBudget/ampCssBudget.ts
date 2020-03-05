function ampCssBudget() {
    let char = document.querySelector('style[amp-custom]').textContent.split('').length,
        limit = 75000,
        left = limit - char,
        perc = char / limit * 100,
        size = char / 1000,
        msg = `AMP CSS Budget: ${Math.round(size)}/75k ${Math.round(perc)}% ~ approx ${left} char left!`;

    if (perc <= 50) {
        console.log("%c" + msg, "color:#00FF7F");
    } else if (perc <= 75) {
        console.log("%c" + msg, "color:#ccff00");
    } else {
        console.log("%c" + msg, "color:#ff073a");
    }
}