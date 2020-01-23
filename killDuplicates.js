// *Written in jQuery*
function killDuplicates(arr) {
    arr.forEach(function (el) {
        if ($(el).length >= 2) {
            $(el + ":gt(0)").remove(); // greater than 0, skips first el
        }
    });
}