const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('manali_resume.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('resume_text.txt', data.text);
    console.log("Extraction complete.");
}).catch(console.error);
