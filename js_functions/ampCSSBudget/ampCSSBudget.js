function ampCssBudget() {
    let char = document.querySelector('style[amp-custom]').textContent.split('').length, limit = 50000, left = limit - char, perc = char / limit * 100, size = char / 1000, msg = `AMP CSS Budget: ${Math.round(size)}/50k ${Math.round(perc)}% ~ approx ${left} char left!`;
    if (perc <= 50) {
        console.log("%c" + msg, "color:#00FF7F");
    }
    else if (perc <= 75) {
        console.log("%c" + msg, "#ccff00");
    }
    else {
        console.log("%c" + msg, "#ff073a");
    }
}
