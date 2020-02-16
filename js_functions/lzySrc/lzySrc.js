function lzySrc(selector, dataWidth) {
    document.querySelectorAll(selector).forEach((el) => {
        let dataArr = el.getAttribute('data-widths')
            .replace('[', '')
            .replace(']', '')
            .split(', ');
        let dataSelected = dataArr[dataWidth].toString();
        let newSrc = el.getAttribute('data-src')
            .replace(`{width}`, dataSelected);
        el.src = newSrc;
    });
}
