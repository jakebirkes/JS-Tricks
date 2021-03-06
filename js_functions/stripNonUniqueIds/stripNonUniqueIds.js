const stripNonUniqueIds = (arr) => {
    let removedIds = [];
    arr.forEach(str => {
        if (/\#/.test(str) === false) {
            console.error(`stripNonUniqueIds() please use a valid selector, '#${str}' instead of '${str}'`);
            return;
        }
        let el = document.querySelectorAll(str), removed = false;
        if (el.length > 1) {
            for (let i = 1; i < el.length; i++) {
                if (el[i].id === el[0].id) {
                    el[i].removeAttribute('id');
                    removed = true;
                }
            }
            if (removed) {
                removedIds.push(str);
            }
            removed = false;
        }
    });
    if (removedIds.length > 0) {
        console.log("stripNonUniqueIds() removed the following non-unique ids ~ elements retained:"),
            console.log(removedIds);
    }
};
