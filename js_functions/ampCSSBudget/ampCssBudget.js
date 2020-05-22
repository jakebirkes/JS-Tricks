function ampCSSBudget() {
    const ampLimit = 75000;
    let allStyles = document.querySelector('style[amp-custom]').textContent;
    document.querySelectorAll('[style]').forEach(e => {
        allStyles += e.getAttribute('style');
    });
    const char = allStyles.split('').length;
    const diff = ampLimit - char;
    const size = Math.round(100 * (char / 1000)) / 100;
    const per = Math.round(100 * (char / ampLimit * 100)) / 100;
    const msg = `AMP CSS Budget: ${size}/75k ${per}% ~ approx ${diff} char left!`;
    if (per <= 50) {
        console.log("%c" + msg, "color:#00FF7F");
    }
    else if (per <= 75) {
        console.log("%c" + msg, "color:#ccff00");
        ;
    }
    else {
        console.log("%c" + msg, "color:#ff073a");
    }
}
