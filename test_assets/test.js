console.log("helo");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function yuh() {
    await sleep(1400); // this is when using fast rpcs
    //await sleep(2000); // this is when using normal rpcs

    random_hand();
    
}

function random_hand() {
    let random = getRandomInt(3);
    if (random == 0) {
        test.innerHTML = "<img src='test_assets/rock.png' width='300px' height='300px'/>";
    } else if (random == 1) {
        test.innerHTML = "<img src='test_assets/paper.png' width='300px' height='300px'/>";
    } else {
        test.innerHTML = "<img src='test_assets/scissors.png' width='300px' height='300px'/>";
    }
}

rockpaperscissors.onended = function() {
    random_hand();
    shoot.play();
}

document.onkeypress = function(e) {

    text.innerHTML = "";
    // test.innerHTML = e.type +
    // ' key=' + e.key +
    // ' code=' + e.code +
    // (e.shiftKey ? ' shiftKey' : '') +
    // (e.ctrlKey ? ' ctrlKey' : '') +
    // (e.altKey ? ' altKey' : '') +
    // (e.metaKey ? ' metaKey' : '') +
    // (e.repeat ? ' (repeat)' : '');

    if (e.key == 'Enter'){
        test.innerHTML = "<img src='test_assets/rpcs.png' width='300px' height='300px' class='vert-move' />";
        rockpaperscissors.play();
    } else if (e.key == '1') {
        text.innerHTML = "Yes, I win! :)";
        win.play();
    } else if (e.key == '2') {
        text.innerHTML = "Aw, you win! :(";
        lose.play();
    } else if (e.key == '3') {
        text.innerHTML = "We have tied this round.";
        tie.play();
    } else if (e.key == 'q') {
        test.innerHTML = "<img src='test_assets/rock.png' width='300px' height='300px'/>";
    } else if (e.key == 'w') {
        test.innerHTML = "<img src='test_assets/paper.png' width='300px' height='300px'/>";
    } else if (e.key == 'e') {
        test.innerHTML = "<img src='test_assets/scissors.png' width='300px' height='300px'/>";
    } else if (e.key == '`') {
        if (debug.style.display == "none") {
            debug.style.display = "block";
        } else {
            debug.style.display = "none";
        }
        
    }
        
}