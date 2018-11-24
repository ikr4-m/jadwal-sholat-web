const logger = require('./logger');
module.exports = (app, site) => {
    try {
        app.get('/', function (req, res) {
            res.render(".." + site + 'index.pug');
        });
    } catch (error) {
        logger.error(`${error.message}\n${error}`);
    } finally {
        logger.info("Site ready!");
    }
};