// panggil child_process untuk mengeksekusi exe
const exec = require('child_process').execFile;

module.exports = (logger) => {
    function callingChrome() {
        // deklarasi untuk chrome path
        const x64path = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
        const x86path = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"

        // panggil chrome dengan paramater
        // chrome-path /new-window http://localhost:3030/
        exec(x64path, ["/new-window", "http://localhost:3030/"], (err, data) => {
            if (err) {
                console.log(logger("ERROR") + "Trying to X86 Method. Don't panic! The system will test this method.");
                exec(x86path, ["/new-window", "http://localhost:3030/"], (err, data) => {
                    if (errr) console.log(logger("ERROR") + "chrome.exe isn't available in this device");
                })
            }
            else {
                console.log(logger("Preparing") + "chrome.exe has launched!")
                setTimeout(() => {
                    console.log(logger("Ready") + "Your app is deployed!");
                }, 1000);
            }
        });
    }
    callingChrome();
}