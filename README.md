# 🚀 Portfolio Website

Meine persönliche Portfolio-Website — gebaut mit **React + Vite**, deployed auf **GitHub Pages**.

## 🛠 Tech Stack

- **React 18** — Komponentenbasiertes UI
- **Vite 5** — Blitzschneller Build-Tool
- **CSS Custom Properties** — Design System
- **GitHub Actions** — Automatisches Deployment

## 📦 Installation & Start

```bash
# 1. Repository klonen
git clone https://github.com/DEIN-USERNAME/portfolio.git
cd portfolio

# 2. Dependencies installieren
npm install

# 3. Dev-Server starten
npm run dev
# → Öffnet http://localhost:5173
```

## 🚢 Auf GitHub Pages deployen

### Einmalige Einrichtung

**1. Repository auf GitHub erstellen**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DEIN-USERNAME/REPO-NAME.git
git push -u origin main
```

**2. `vite.config.js` anpassen**
```js
// Ersetze 'portfolio' mit deinem Repository-Namen!
base: '/REPO-NAME/',
```

**3. GitHub Pages aktivieren**
- GitHub Repository öffnen
- Gehe zu **Settings → Pages**
- Source: **GitHub Actions** auswählen
- Speichern

**4. Deployment auslösen**
```bash
git add .
git commit -m "Deploy"
git push
```

→ GitHub Actions baut & deployed automatisch!
→ Deine Site ist unter `https://DEIN-USERNAME.github.io/REPO-NAME/` erreichbar.

## ✏️ Anpassen

| Datei | Was du ändern solltest |
|---|---|
| `src/components/Hero.jsx` | Name, Beschreibung |
| `src/components/About.jsx` | Bio-Text, Stats, Links |
| `src/components/Projects.jsx` | Projekte, Links, Tags |
| `src/components/Skills.jsx` | Skills, Level-Werte, Tools |
| `vite.config.js` | `base` → dein Repo-Name |
| `index.html` | Seitentitel |

## 📁 Projektstruktur

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      ← GitHub Actions (automatisch deployen)
├── src/
│   ├── components/
│   │   ├── Nav.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   └── Skills.jsx / .css
│   ├── App.jsx / .css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Design Features

- Custom Cursor mit Blend-Mode Effekt
- 3D Tilt-Effekt auf Projektkarten
- Scroll-animierte Elemente (IntersectionObserver)
- Animiertes Skill-Bar System
- Floating Blob-Hintergründe
- Lauftext-Marquee im Hero
- Rotating Badge
- Noise-Overlay Textur
- Vollständig responsive (Mobile-first)
