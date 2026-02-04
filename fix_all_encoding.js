
import fs from 'fs';

const filePath = 'C:\\Users\\Gabriel\\Desktop\\AmordeRosa-Repositorio\\src\\data\\portfolio.json';

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Fix "decoração"
    content = content.replace(/decora.*?o/g, 'decoração');

    // 2. Fix "Peça"
    content = content.replace(/Pe.*?a /g, 'Peça ');

    // 3. Fix "temática"
    content = content.replace(/tem.*?tica/g, 'temática');

    // 4. Fix "Páscoa"
    content = content.replace(/P.*?scoa/g, 'Páscoa');

    // 5. Fix "pintada à mão" (just in case)
    content = content.replace(/pintada .*? m.*?o\./g, 'pintada à mão.');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully fixed all encoding errors in portfolio.json');

} catch (err) {
    console.error('Error processing file:', err);
}
