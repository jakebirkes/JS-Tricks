// *Written in jQuery*
function stripDuplicateId() {
    $('[id]').each(function () {
        if ($('[id=' + `"${this.getAttribute('id')}"` + ']').length >= 2) {
            $('[id=' + `"${this.getAttribute('id')}"` + ']:gt(0)').removeAttr('id');
        }
    });
}