function helloWorld(name) {
    var helloWorldString = `Hello, ${name} Your name is ${name.length} letters long`;
    console.log(helloWorldString);
}

helloWorld("Robert"); // Display "Hello Robert! Your name is 6 letters long."
helloWorld("Jo");     // Display "Hello Jo! Your name is 2 letters long."