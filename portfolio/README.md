# 📁 Portfolio — Editing Guide

Everything you need to edit this site yourself. No coding experience required —
just follow the steps below.

## 🚀 Quick start

**To view your site:** double-click `index.html`. It opens in your browser.
Refresh the browser (F5) after every edit to see your changes.

**To edit a file:** right-click it → **Open with** → Notepad (or any text editor).

> 💡 Whenever you get stuck, look for `✏️ EDIT` comments in the files —
> they mark every spot you're meant to change.

---

## 1️⃣ Change the text (index.html)

Open `index.html` and search for `✏️ EDIT`. Each block tells you what it controls:

| Where | What it changes |
|---|---|
| `<title>` | Browser tab text |
| Hero section | Your name, headline, intro |
| About section | Your story |
| Skills section | Skill boxes |
| Work section | Project titles, categories, years |
| Contact section | Email and social links |
| Footer | Copyright line |

**Just replace the text between the `>` and `<` characters.**
Don't delete any `<`, `>`, `"` or `/` characters — the site depends on them.

### Add a new skill
Copy a whole skill block and paste it below the others:

```html
<li class="skill-card">
  <h3>Skill name</h3>
  <p>Skill description</p>
</li>
```

### Add a new project
Copy a whole `<article class="work-card">…</article>` block and paste it
below the last one. Then:

1. Set `data-category="branding"` — the category must match one of your filter buttons
2. Put your image in the `images/` folder
3. Replace the `<div class="work-card__placeholder">…</div>` line with:
   `<img src="images/my-project.jpg" alt="Project title" />`
4. Edit the `<h3>` title and `<p>` category/year

### Add / remove a filter button
In the `work__filters` block, each button has a `data-filter` value.
It must match the `data-category` on your project cards.

---

## 2️⃣ Add images

Drop your files into the `images/` folder, then reference them in `index.html`:

```html
<!-- Profile photo -->
<img src="images/profile.jpg" alt="Your Name" />

<!-- Project image -->
<img src="images/project-1.jpg" alt="My project" />
```

Tips:
- Use `.jpg` or `.png` files
- Keep names simple and lowercase: `profile.jpg`, `project-1.jpg`
- Project images look best at roughly **1200×900 pixels** (4:3)
- Profile photo is shown tall: roughly **800×1000 pixels** (4:5)

---

## 3️⃣ Change colors & style (css/style.css)

Open `css/style.css`. At the very top is a `:root` block — **the control panel
for the whole design**:

```css
--bg: #fafaf8;              /* page background */
--text: #171717;            /* main text color */
--text-muted: #6b6b6b;      /* secondary text */
--accent: #2f6b4f;          /* highlight color (buttons on hover, headings) */
--radius: 14px;             /* how round the corners are */
```

Colors are written as **hex codes** like `#ff5733`. Pick any color at
[colorpicker.com](https://www.colorpicker.com) and paste the value in.

> 🎯 **Simplest makeover:** change just `--accent` to a new color and refresh.

### Change the font
1. Go to [fonts.google.com](https://fonts.google.com), pick a font, and copy the
   `<link>` code it gives you
2. Replace the Google Fonts `<link>` lines in `index.html`
3. In `css/style.css`, change `--font: "Inter", …` to your new font's name

---

## 4️⃣ Don't touch these (unless you're feeling brave)

| File | Why |
|---|---|
| `js/main.js` | Runs the gallery filters, lightbox, and animations |
| The `.lightbox` block at the bottom of `index.html` | Pop-up image viewer |
| Random CSS rules far below the `:root` block | Layout and behavior |

If you ever break something, undo your last change (Ctrl+Z in your editor)
or check that every tag still has its matching `</tag>`.

---

## ✅ Pre-publish checklist

- [ ] Your real name everywhere (`Your Name` still appears in a few spots)
- [ ] Real email in the Contact section (both places: `href` and text)
- [ ] Social links point to your profiles (not just `#`)
- [ ] Your photo added
- [ ] Real project images + titles added
- [ ] Footer year and name updated
- [ ] Looked at it on your phone (or shrink the browser window)

## 🌍 Free hosting (optional)

When you're happy with it, put it online for free:

1. Create a GitHub account and make a new repository named `portfolio`
2. Upload all your files (drag and drop on the GitHub website)
3. Go to **Settings → Pages** and enable GitHub Pages
4. Your site will be live at `https://yourusername.github.io/portfolio`
