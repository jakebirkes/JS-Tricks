// *Written in jQuery*
function killDuplicateContent(arr) {
    window.removedContent = [];
    arr.forEach(function (el) {
        if ($(el)[0].textContent === $(el)[i].textContent) {
            window.removedContent.push(el);
            $(el + ":gt(0)").remove();
        }
    });
    if (window.removedContent.length > 0) {
        console.log("killDuplicateContent() removed the following duplicate elements:",
            "\n", window.removedContent);
    }
}