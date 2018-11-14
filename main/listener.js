const port = require("./constant").listener_port;

module.exports = (app, logger, plugin) => {
    try {  
        app.listen(port, () => {
            console.log(logger("Preparing") + "Port has opened!");
        })
    } catch (error) {
        console.log(logger("ERROR") + `${error.message}\n${error}`);
    }
}