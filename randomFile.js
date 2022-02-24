// Take a look a this with Quokka!!

const startMessage = "Hello World";
const endMessage = "See you later!";

const start = () => {
    sendMessage(startMessage);
}

start();

function sendMessage(message) {
    console.log(message);
}

const end = () => {
    sendMessage(endMessage);
}
end();