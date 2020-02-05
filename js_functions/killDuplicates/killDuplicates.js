// *Written in jQuery*
function killDuplicates(arr) {
    window.removedDuplicates = [];
    arr.forEach(function (el) {
        if ($(el).length > 1) {
            window.removedDuplicates.push(el);
            $(el + ":gt(0)").remove();
        }
    });
    if (window.removedDuplicates.length > 0) {
        console.log("killDuplicates() removed the following duplicate elements:",
            "\n", window.removedDuplicates);
    }
}