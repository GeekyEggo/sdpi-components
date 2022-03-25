const fs = require('fs-extra');
const path = require('path');

const from = path.resolve(__dirname, '../example');
const to = path.resolve(process.env.APPDATA, 'Elgato/StreamDeck/Plugins/com.geekyeggo.sdpi.sdPlugin');

fs.copy(from, to, (err) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('Plugin installed.');
    }
});
