# Personal Website Template

This is a template for a simple personal website. It's easy to customise and deploy, and looks fantastic.

Made with React, TypeScript, and pure CSS 💪

Live demo: [https://alexbr.dev/personal-website-template](https://alexbr.dev/personal-website-template)

![image](https://github.com/user-attachments/assets/98e4799d-c699-4c1f-add1-e4df78a96206)

## Features
- Responsive design - looks great on all devices
- Easy to customize - quickly change the content and theme
- Easy to deploy - deploy to GitHub Pages with a single command
- Easy to maintain - once you set it up, you literally just edit a json file and run a command to add new projects

## Quick Start
### Generate a new repository from this template
Click the "Use this template" button at the top of the page. This will create a new repository with the same files as this one.

Name your repository as "username.github.io" where "username" is your GitHub username. This is necessary for GitHub Pages to work.

### Clone the repository and install dependencies
```bash
git clone https://github.com/<username>/<username>.github.io.git
cd <username>.github.io
npm install
```

### Start the development server and open the website in your browser
```bash
npm run dev
```

### Customize the content to your liking.
The website will be updated in real-time as you make changes.

Here are some things you might want to change:
- Favicon
  - Upload your favicon to the `public` folder and change the `link`'s `href` in `index.html` if necessary
- Manifest:
  - Update the `public/manifest.json` file
- Meta tags and title:
  - Update the `index.html` file
- About me:
  - Update the `src/customisation/aboutme.ts` file
- Background image:
  - Replace the `public/background.svg` file. If you want to use a different file format, update the `src/customisation/theme.css` file too
- Theme:
  - Update the `src/customisation/theme.css` file
- Socials:
  - Update the `src/customisation/socials.tsx` file
- Package.json:
  - Update the `name` and `homepage` fields with your GitHub username
- Projects
  - Update the `src/customisation/projects.json` file
  - Add project images to the `src/customisation/images` folder

4. Deploy to GitHub Pages
```bash
npm run deploy
```

## Adding new projects
1. Add a new object to the array in the `src/customisation/projects.json` file
2. Add the project image to the `src/customisation/images` folder
3. Run the following command to redeploy the website:
```bash
npm run deploy
```
