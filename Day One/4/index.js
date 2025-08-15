function getCallback(callback) {
    callback();
}

function getCallbackMessage() {

    console.log("Callback is Working...");

}

function getMessagesFromClient() {

    return new Promise((res) => {
        res("Hello I am Ryan And I am Learning JavaScript");
    });

}

async function awaitedFunction() {

    getCallback(getCallbackMessage)

    let messages = await getMessagesFromClient();
    console.log(messages);

}

awaitedFunction().then(e => e);