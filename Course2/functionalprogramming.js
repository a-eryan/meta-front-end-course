// Task 1: Build a function-based console log message generator

//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    //The %c placeholder in the message string tells the console that the next argument will be a CSS style string to apply to the message
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    //Finally, console log the message and style variables inside the consoleStyler function declaration.
    console.log(message, style); 
    //console.log(style); and console.log(message); is wrong
}



// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log(message, style);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');
// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
