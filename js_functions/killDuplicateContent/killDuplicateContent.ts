const killDuplicateContent = (arr: Array <string>) => {
    let removedDuplicates = [];
    arr.forEach(str => {
        let el = document.querySelectorAll(str), removed = false;
        if (el.length > 1) {
            for (let i = 1; i < el.length; i++) {
                if (el[i].textContent === el[0].textContent) {
                    el[i].parentNode.removeChild(el[i]);
                    removed = true;
                }
            }
            if (removed) {
                removedDuplicates.push(str);
            }
            removed = false;
        }
    });
    if (removedDuplicates.length > 0) {
        console.log("killDuplicateContent() removed the following duplicate elements:"),
            console.log(removedDuplicates);
    }
};