# School Website

A simple school website built with **HTML, CSS, JavaScript, and Express**. The project serves a static school website through a small Node.js web server.

## Features

- Static website served from the `public/` directory.
- Express-based HTTP server.
- Configurable port through the `PORT` environment variable.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Node.js
- Express

## Getting Started

### Prerequisites

- Node.js (14 or later)
- npm

### Installation

```bash
git clone https://github.com/demi-x29/school-website.git
cd school-website
npm install
```

### Run locally

The root `server.js` file serves the `public/` directory:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To use a different port:

```bash
PORT=4000 npm start
```

On Windows PowerShell:

```powershell
$env:PORT=4000; npm start
```

## Project Structure

```text
school-website/
├── public/
│   ├── css/
│   ├── js/
│   └── index.html
├── src/
│   ├── app.js
│   └── routes/
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Development Notes

- Update `public/index.html` for page content.
- Update styles in `public/css/`.
- Update browser-side behavior in `public/js/`.
- The root `server.js` is the current entry point used by `npm start`.

## Future Improvements

- Add screenshots of the current interface.
- Add automated tests.
- Review and consolidate the duplicate Express entry points in `server.js` and `src/app.js`.

---

This repository is an earlier web development project and is documented as such.
