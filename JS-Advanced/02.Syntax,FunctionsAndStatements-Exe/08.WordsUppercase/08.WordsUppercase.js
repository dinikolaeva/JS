function uppercase(text) {

    let reg = /\w+/g;
    let result = text.toUpperCase()
        .match(reg)
        .join(', ');

    console.log(result);
}

uppercase('Hi, how are you?');
uppercase('hello');