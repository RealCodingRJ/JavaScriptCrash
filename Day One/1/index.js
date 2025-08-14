function sayHelloWorld(message) {

    return new Promise((res) => {
        res(message.toUpperCase());
    });

}


let a = async function() {

    let message = await sayHelloWorld("|  Hello World  |");
    console.log(message)
}

function getSaidMessage() {
    a().then(e => e);
}

getSaidMessage()