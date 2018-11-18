module.exports = (app, site, logger) => {
    try {
        app.get('/', function (req, res) {
            res.render(".." + site + 'index.pug');
        });
    } catch (error) {
        console.log(logger("ERROR") + `${error.message}\n${error}`);
    } finally {
        console.log(logger("Preparing") + "Site ready!");
    }
};