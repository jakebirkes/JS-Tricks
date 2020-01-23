function lzySrc(selector, dataWidth) {
    document.querySelectorAll(selector).forEach((el) => {
        let dataArr = el.getAttribute('data-widths') // string into array
            .replace('[', '')
            .replace(']', '')
            .split(', ');

        let dataSelected = dataArr[dataWidth].toString(); // selecting size
        let newSrc = el.getAttribute('data-src') // creating valid src string
            .replace(`{width}`, dataSelected);

        el.src = newSrc;
    });
}