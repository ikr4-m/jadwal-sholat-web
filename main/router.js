module.exports = (app, site, router, logger) => {
    try {
        app.get('/', function (req, res) {
            res.render(".." + site + 'index.html');
        });
    } catch (error) {
        console.log(logger("ERROR") + `${error.message}\n${error}`);
    } finally {
        console.log(logger("Preparing") + "Site ready!");
    }
};