module.exports = function(app, logger, plugin){
    try {  
        app.listen(3030, function (){
            console.log(logger("Preparing") + "Ready!");
        })
    } catch (error) {
        console.log(logger("ERROR") + `${error.message}\n${error}`);
    }
}