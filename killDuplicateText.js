// *Written in jQuery*
function killDuplicateText(arr) {
    arr.forEach(function (el) {
        if ($(el)[0].textContent === $(el)[i].textContent) {
            $(el + ":gt(0)").remove(); // greater than 0, skips first el
        }
    });
}