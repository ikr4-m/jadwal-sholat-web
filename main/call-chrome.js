// panggil child_process untuk mengeksekusi exe
const exec = require('child_process').execFile;
// panggil port dari constant
const port = require('./../main/constant').listener_port;

module.exports = (logger) => {
    function callingChrome() {
        // deklarasi untuk chrome path
        const x64path = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
        const x86path = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
        const chrome_parameter = new Array("/new-window", "--start-fullscreen", `http://localhost:${port}`);

        // panggil chrome dengan paramater
        // chrome-path /new-window --start-fullscreen http://localhost:3030/
        exec(x64path, chrome_parameter, (err) => {
            if (err) {
                console.log(logger("ERROR") + "Trying to X86 Method. Don't panic! The system will test this method.");
                exec(x86path, chrome_parameter, (err) => {
                    if (err)
                        return console.log(logger("ERROR") + "chrome.exe isn't available in this device");
                });
            }
            console.log(logger("Ready") + "chrome.exe has launched. Your app is deployed!");
        });
    }
    callingChrome();
}