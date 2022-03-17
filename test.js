console.log("helo");

document.onkeypress = function(e) {

    test.innerHTML = e.type +
    ' key=' + e.key +
    ' code=' + e.code +
    (e.shiftKey ? ' shiftKey' : '') +
    (e.ctrlKey ? ' ctrlKey' : '') +
    (e.altKey ? ' altKey' : '') +
    (e.metaKey ? ' metaKey' : '') +
    (e.repeat ? ' (repeat)' : '');

    if (e.key == '1'){
        rpcs.play();
    } else if (e.key == '2') {
        win.play();
    } else if (e.key == '3') {
        lose.play();
    } else if (e.key == '4') {
        tie.play();
    }
        
}