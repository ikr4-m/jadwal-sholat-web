module.exports = function(addon_msg) {
    let calendar = new Date();
    // ECMA 2017 String.prototype.padStart(), IE not supported
    let d = calendar.getDate().toString().padStart(2, 0);
    let m = calendar.getMonth().toString().padStart(2, 0);
    let y = calendar.getFullYear().toString().padStart(2, 0);
    let h = calendar.getHours().toString().padStart(2, 0);
    let mm = calendar.getMinutes().toString().padStart(2, 0);
    let s = calendar.getSeconds().toString().padStart(2, 0);
    const viewer = `[${d}-${m}-${y}|${h}\:${mm}\:${s}] [${addon_msg}] `;
    return viewer;
}