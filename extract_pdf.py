import sys
try:
    from pypdf import PdfReader
except ImportError:
    try:
        from PyPDF2 import PdfReader
    except ImportError:
        print('PyPDF2 not installed')
        sys.exit(1)

text = ''
reader = PdfReader('manali_resume.pdf')
for page in reader.pages:
    text += page.extract_text() + '\n'

with open('resume_text.txt', 'w', encoding='utf-8') as f:
    f.write(text)
print('DONE')
