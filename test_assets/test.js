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

function toggle_images(num) {
    if (num == -1) {
        shaking.style.display = "none";
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
    } else if (num == 0) {
        shaking.style.display = "block";
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
    } else if (num == 1) {
        shaking.style.display = "none";
        rock.style.display = "block";
        paper.style.display = "none";
        scissors.style.display = "none";
    } else if (num == 2) {
        shaking.style.display = "none";
        rock.style.display = "none";
        paper.style.display = "block";
        scissors.style.display = "none";
    } else if (num == 3) {
        shaking.style.display = "none";
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "block";
    }
}

async function random_hand() {
    shaking.style.display = "none";
    await sleep(200);
    let random = getRandomInt(3);
    toggle_images(random+1);
    text.innerHTML = "Analysing your hand...";
    loader.style.display = "block";
}

rockpaperscissors.onended = async function() {
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
        toggle_images(0);
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
        toggle_images(1);
    } else if (e.key == 'w') {
        toggle_images(2);
    } else if (e.key == 'e') {
        toggle_images(3);
    } else if (e.key == 'a') {
        text.innerHTML = "<p style='color:#00AE08';>Detected rock</p>";
        loader.style.display = "none";
    } else if (e.key == 's') {
        text.innerHTML = "<p style='color:#00AE08';>Detected paper</p>";
        loader.style.display = "none";
    } else if (e.key == 'd') {
        text.innerHTML = "<p style='color:#00AE08';>Detected scissors</p>";
        loader.style.display = "none";
    } else if (e.key == '`') {
        if (debug.style.display == "none") {
            debug.style.display = "block";
        } else {
            debug.style.display = "none";
        }
        
    }
        
}