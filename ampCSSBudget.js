function ampCSSBudget() {
    let size = Math.ceil(document.querySelector('style[amp-custom]').innerHTML.split('').length * 0.001),
        perc = Math.ceil(size / 0.5), msg = `cssBudget: ${size}/50k ~ ${perc}%`;
    if (perc <= 50) {
        highlight(msg);
    } else if (perc <= 75) {
        highlight(msg, "#ccff00");
    } else {
        highlight(msg, "#ff073a");
    }
}