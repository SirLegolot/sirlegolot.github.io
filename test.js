console.log("helo");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function yuh() {
    await sleep(1400); // this is when using fast rpcs
    //await sleep(2000); // this is when using normal rpcs
    test.innerHTML="Done audio";
}


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
        yuh();
        rpcs.play();
    } else if (e.key == '2') {
        win.play();
    } else if (e.key == '3') {
        lose.play();
    } else if (e.key == '4') {
        tie.play();
    }
        
}