# Resume Setup Instructions

## Adding Your Resume

To enable the "Download Resume" button, you need to:

1. **Add your resume PDF to the public folder:**
   - Place your resume file at: `/public/resume.pdf`
   - Or rename it to match: `resume.pdf`

2. **Alternative options:**
   - If your resume has a different name, update the link in `src/components/site/Hero.tsx`:
     ```tsx
     <a href="/your-resume-name.pdf" download="Ajay_Kancheti_Resume.pdf">
     ```
   
   - If your resume is hosted elsewhere (Google Drive, Dropbox, etc.), update the link:
     ```tsx
     <a href="https://your-resume-url.com/resume.pdf" download="Ajay_Kancheti_Resume.pdf">
     ```

3. **Test the button:**
   - After adding the file, test that clicking "Download Resume" downloads your PDF correctly.

## Current Setup

The resume button is currently configured to download from `/resume.pdf` in the public folder.
