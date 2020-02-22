const killDuplicates = (arr: Array <string>) => {
    let removedDuplicates = [];
    arr.forEach(str => {
        let el = document.querySelectorAll(str);
        if (el.length > 1) {
            removedDuplicates.push(str);
            for (let i = 1; i < el.length; i++) {
                el[i].parentNode.removeChild(el[i]);
            }
        }
    });
    if (removedDuplicates.length > 0) {
        console.log("killDuplicates() removed the following duplicate elements:"),
            console.log(removedDuplicates);
    }
};
