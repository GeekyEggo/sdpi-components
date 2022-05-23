const fs = require('fs');
const https = require('https');
const path = require('path');

const coverage = require('../coverage/coverage-summary.json');

// Determine the badge.
const { pct } = coverage.total.lines;
const color = pct >= 80 ? 'brightgreen' : pct <= 59 ? 'red' : 'yellow';

// Prepare the local env.
const dest = path.join(__dirname, '../assets/coverage.svg');
if (!fs.existsSync(path.dirname(dest))) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
}

// Download the badge and save.
const req = https.get(`https://img.shields.io/badge/Coverage-${pct}%25-${color}?logo=jest`, (res) => {
    const writer = fs.createWriteStream(dest, 'utf-8');

    res.on('data', (data) => writer.write(data));
    res.on('end', () => writer.close());
    res.on('error', (err) => {
        console.error(err.message);
        process.exit(1);
    });
});

req.on('error', (err) => {
    console.error(err.message);
    process.exit(1);
});

req.end();
