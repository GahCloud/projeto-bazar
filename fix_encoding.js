
import fs from 'fs';
import path from 'path';

const filePath = 'C:\\Users\\Gabriel\\Desktop\\AmordeRosa-Repositorio\\src\\data\\portfolio.json';

try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Regex to match the corrupted string pattern: "Imagem religiosa... pintada <garbage> m<garbage>o."
    const corruptedPattern = /"description": "Imagem religiosa artesanal em gesso, pintada .*? m.*?o\."/g;

    const newContent = content.replace(corruptedPattern, '"description": "Imagem religiosa artesanal em gesso, pintada à mão."');

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Successfully fixed encoding errors in portfolio.json');
    } else {
        console.log('No matches found to replace.');
    }

} catch (err) {
    console.error('Error processing file:', err);
}
