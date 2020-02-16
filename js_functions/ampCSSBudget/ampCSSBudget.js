function ampCSSBudget() {
    let char = document.querySelector('style[amp-custom]').textContent.split('').length, limit = 75000, left = limit - char, perc = char / limit * 100, size = char / 1000, msg = `AMP CSS Budget: ${size}/75k ${perc}% ~ approx ${left} char left!`;
    if (perc <= 50) {
        tools.log(msg);
    }
    else if (perc <= 75) {
        tools.log(msg, "#ccff00");
    }
    else {
        tools.log(msg, "#ff073a");
    }
}
