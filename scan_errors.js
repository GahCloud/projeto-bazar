
const fs = require('fs');
const path = require('path');

const filePath = 'src/data/portfolio.json';

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);

    const descriptions = new Set();
    const unknownChars = new Set();

    data.forEach(item => {
        if (item.description) {
            if (item.description.includes('')) {
                descriptions.add(item.description);
            }
            // Also check for common "mo" "decorao" patterns even if not showing as replacement char
            if (item.description.match(/pintada\s+m/)) {
                descriptions.add(item.description);
            }
            if (item.description.match(/decora/)) {
                descriptions.add(item.description);
            }
        }
    });

    console.log("suspicious descriptions found:");
    descriptions.forEach(d => console.log(d));

} catch (err) {
    console.error(err);
}
