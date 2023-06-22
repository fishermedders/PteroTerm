let Nodeactyl = require('nodeactyl')
let WebSocket = require('ws')
let myRL = require('serverline')

const application = new Nodeactyl.NodeactylClient(process.argv[2], process.argv[3]);

let ws;

// RTFM
if(!process.argv[2] || !process.argv[3] || !process.argv[4]) {
    console.log("Usage: pteroterm <url> <api token> <server uuid>")
    process.exit()
}
if(process.argv[5]) {
    process.title = process.argv[5] + " // PteroTerm"
}

application.getConsoleWebSocket(process.argv[4]).then(socketObj => {
    console.log('Attempting Connection to ' + process.argv[4])
    ws = new WebSocket(socketObj.socket, {origin: process.argv[2]})
    ws.ptero_ident = process.argv[4];
    ws.on('error', console.error);

    ws.on('open', function open() {
        // Who am I?
        ws.send(JSON.stringify({ event: "auth", args: [socketObj.token] }));
    });

    ws.on('message', function message(data) {
        if(JSON.parse(data).event == "auth success") {
            // Let's ask pterodactyl for some logs!
            ws.send(JSON.stringify({"event":"send logs","args":[null]}))
        } else if(JSON.parse(data).event == "console output") {
            // We got a live one!
            console.log(JSON.parse(data).args[0])
        }
    });
})

// Clear screen, my terminal now >:D
process.stdout.write("\x1Bc")
console.log(Array(process.stdout.rows + 1).join('\n'));

myRL.init();
function prompt() {
    myRL.getRL().question("> ", function(answer) {
        ws.send(JSON.stringify({event: "send command", args: [answer]}))
        prompt()
    });
}

prompt()