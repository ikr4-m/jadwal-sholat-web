const port = require("./constant").listener_port;
const logger = require("./logger")

module.exports = (app) => {
    try {
        app.listen(port, () => {
            logger.info("Port has opened!");
        });
    } catch (error) {
        logger.error(`${error.message}\n${error}`);
    }
};