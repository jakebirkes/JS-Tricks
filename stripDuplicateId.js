// *Written in jQuery*
function stripDuplicateId() {
    window.removedIDs = [];
    $('[id]').each(function() { 
        let thisID = `[id="${$(this).attr('id')}"]`;
        if ($(thisID).length > 1) {
            window.removedIDs.push(thisID);
            $(`${thisID}:gt(0)`).removeAttr('id');
        }
    });
    if (window.removedIDs.length > 0) { 
        console.log("window.stripDuplicateId() stripped the following duplicate ids:");
        console.log(window.removedIDs);
    }
}