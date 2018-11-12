module.exports = function(app, logger, plugin){
    try {  
        app.listen(3030, function (){
            console.log(logger("Preparing") + "Port Ready!");
        })
    } catch (error) {
        console.log(logger("ERROR") + `${error.message}\n${error}`);
    }
}