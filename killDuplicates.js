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
        console.log("window.killDuplicates() removed the following duplicate elements:");
        console.log(window.removedDuplicates);
    }
}