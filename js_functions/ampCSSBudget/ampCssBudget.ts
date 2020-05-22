function ampCSSBudget() {

    const ampLimit: number = 75000;

    // amp stylesheet
    let allStyles: string = document.querySelector('style[amp-custom]').textContent;

    // inline-styles
    document.querySelectorAll('[style]').forEach(e => {
        allStyles += e.getAttribute('style');
    });

    const char: number = allStyles.split('').length;
    const diff: number = ampLimit - char;
    const size: number = Math.round(100 * (char / 1000)) / 100;
    const per: number = Math.round(100 * (char / ampLimit * 100)) / 100;
    const msg: string = `AMP CSS Budget: ${size}/75k ${per}% ~ approx ${diff} char left!`;

    if (per <= 50) {
        console.log("%c" + msg, "color:#00FF7F");
    } else if (per <= 75) {
        console.log("%c" + msg, "color:#ccff00");;
    } else {
        console.log("%c" + msg, "color:#ff073a");
    }

}
