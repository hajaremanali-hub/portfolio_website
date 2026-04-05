import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

const dataBuffer = fs.readFileSync('manali_resume.pdf');
pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('resume_text.txt', data.text);
    console.log("Extraction complete.");
}).catch(console.error);
