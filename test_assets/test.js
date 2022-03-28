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
    text.innerHTML = "Analysing your hand...";
    loader.style.display = "block";
}

rockpaperscissors.onended = function() {
    random_hand();
    shoot.play();
}

async function next_round() {
    text.innerHTML = "Next round... 3";
    await sleep(500);
    text.innerHTML = "Next round... 2";
    await sleep(500);
    text.innerHTML = "Next round... 1";
    await sleep(500);    
    text.innerHTML = "";
}

document.onkeypress = async function(e) {
    // test.innerHTML = e.type +
    // ' key=' + e.key +
    // ' code=' + e.code +
    // (e.shiftKey ? ' shiftKey' : '') +
    // (e.ctrlKey ? ' ctrlKey' : '') +
    // (e.altKey ? ' altKey' : '') +
    // (e.metaKey ? ' metaKey' : '') +
    // (e.repeat ? ' (repeat)' : '');

    if (e.key == 'Enter'){ 
        loader.style.display = "none";
        await next_round();
        test.innerHTML = "<img src='test_assets/rpcs.png' width='300px' height='300px' class='vert-move' />";
        rockpaperscissors.play();
    } else if (e.key == '1') { 
        loader.style.display = "none";
        text.innerHTML = "Yes, I win! :)";
        win.play();
    } else if (e.key == '2') {
        loader.style.display = "none";
        text.innerHTML = "Aw, you win! :(";
        lose.play();
    } else if (e.key == '3') {
        loader.style.display = "none";
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