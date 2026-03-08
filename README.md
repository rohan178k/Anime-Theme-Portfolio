<div align="center">

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                   ANIMATED HEADER BANNER                  -->
<!-- ═══════════════════════════════════════════════════════════ -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,50:7c3aed,100:ec4899&height=220&section=header&text=Rohan%20Kusmude&fontSize=58&fontColor=ffffff&fontAlignY=40&desc=Anime%20Theme%20Portfolio&descAlignY=60&descSize=22&animation=fadeIn" width="100%" />

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                   ANIMATED TYPING SVG                     -->
<!-- ═══════════════════════════════════════════════════════════ -->
<img src="https://readme-typing-svg.demolab.com?font=Cinzel+Decorative&size=15&duration=2800&pause=900&color=C084FC&center=true&vCenter=true&multiline=true&width=720&height=70&lines=Full-Stack+Developer+%7C+Creative+Coder;Building+experiences+at+the+intersection+of+art+%26+code" alt="Typing Animation" />

<br/>

<!-- ═══════════════════════════════════════════════════════════ -->
<!--          CAPSULE-RENDER DIVIDER (replaces marquee SVG)    -->
<!-- ═══════════════════════════════════════════════════════════ -->
<img src="https://capsule-render.vercel.app/api?type=rect&color=0:7c3aed,100:ec4899&height=3&section=header" width="100%"/>

</div>

---

<div align="center">

## 🌐 Live Deployment

### ✨ **[→ https://rohan-portfolio-omega.vercel.app/ ←](https://rohan-portfolio-omega.vercel.app/)** ✨

<a href="https://rohan-portfolio-omega.vercel.app/">
  <img src="https://img.shields.io/badge/%E2%96%B2%20OPEN%20LIVE%20DEMO-rohan--portfolio--omega.vercel.app-ffffff?style=for-the-badge&logo=vercel&logoColor=white&labelColor=000000&color=000000" height="38"/>
</a>

<br/><br/>

<img src="https://img.shields.io/website?url=https%3A%2F%2Frohan-portfolio-omega.vercel.app&style=for-the-badge&logo=vercel&label=Status&color=22c55e&labelColor=0f172a" />
&nbsp;
<img src="https://img.shields.io/badge/Platform-Vercel%20Edge-7c3aed?style=for-the-badge&logo=vercel&logoColor=white" />
&nbsp;
<img src="https://img.shields.io/badge/CI%2FCD-Auto%20Deploy-ec4899?style=for-the-badge&logo=github&logoColor=white" />

</div>

---

<div align="center">

## 🎴 About This Project

</div>

A **cinematic, anime-themed personal developer portfolio** built with Next.js 14 and TypeScript. Features a dramatic twilight color palette, floating **sakura petal particle effects**, smooth section transitions, and immersive visual design — crafted to leave a lasting impression.

---

<div align="center">

## 📜 Portfolio Sections

<table>
<tr>
<td align="center" width="120"><b>🏠</b><br/><b>Home</b><br/><sub>Entry gateway</sub></td>
<td align="center" width="120"><b>👤</b><br/><b>About</b><br/><sub>My story</sub></td>
<td align="center" width="120"><b>⚡</b><br/><b>Skills</b><br/><sub>Tech arsenal</sub></td>
<td align="center" width="120"><b>🚀</b><br/><b>Projects</b><br/><sub>Featured builds</sub></td>
</tr>
<tr>
<td align="center" width="120"><b>🎓</b><br/><b>Education</b><br/><sub>Academic path</sub></td>
<td align="center" width="120"><b>🏅</b><br/><b>Certifications</b><br/><sub>Credentials</sub></td>
<td align="center" width="120"><b>📬</b><br/><b>Contact</b><br/><sub>Let's connect</sub></td>
<td align="center" width="120"><b>🌸</b><br/><b>Sakura FX</b><br/><sub>Ambient petals</sub></td>
</tr>
</table>

</div>

---

<div align="center">

## 🛠️ Tech Stack

<!-- skillicons.dev — verified working on GitHub -->
<img src="https://skillicons.dev/icons?i=nextjs,typescript,react,tailwind,vercel,git,github,vscode&theme=dark&perline=8" />

<br/><br/>

</div>

| Layer | Technology | Purpose |
|-------|-----------|---------|
| 🔷 **Framework** | **Next.js 14** (App Router) | SSR, routing, performance optimization |
| 🔷 **Language** | **TypeScript** (98.8%) | Type-safe, scalable component architecture |
| 🎨 **Styling** | **Tailwind CSS** | Utility-first, custom anime twilight palette |
| ⚛️ **UI Library** | **React 18** | Component-based, declarative UI |
| ✨ **Animations** | **Custom CSS + JS** | Sakura particles, cinematic transitions |
| 🔤 **Fonts** | **next/font** (Geist) | Optimized, zero layout shift font loading |
| 🔧 **Linting** | **ESLint** | Code quality enforcement |
| ⚙️ **CSS Pipeline** | **PostCSS** | Tailwind compilation and transforms |
| 🚀 **Deployment** | **Vercel** | Edge-deployed, auto CI/CD from GitHub |
| 📦 **Package Mgr** | **npm** | Dependency management |

---

<div align="center">

## ✨ Sakura Particle Effect

<!-- Sakura petals falling — animated GIF from trusted GitHub user-images CDN -->
<img src="https://user-images.githubusercontent.com/74038190/241765440-80728820-e06b-4f96-9c9e-9df46f0cc0a5.gif" width="380"/>

</div>

The portfolio features a **custom-built sakura petal particle system** — petals are spawned dynamically via JavaScript with fully randomized properties:

- 🌸 **Size** — varied petal scale for depth perception
- 🌊 **Drift curve** — natural swaying sine-wave path
- ⚡ **Speed** — staggered fall rate for organic layering
- 💫 **Rotation** — continuous spin on descent
- 🎨 **Opacity** — subtle fade-in and fade-out lifecycle

---

<div align="center">

## 📁 Project Structure

</div>

```
Anime-Theme-Portfolio/
│
├── 📂 public/
│   └── 📂 resources/           # Images, icons & static assets
│
├── 📂 src/                     # Application source code
│   ├── 📂 app/                 # Next.js 14 App Router
│   │   ├── layout.tsx          # Root layout + Geist font config
│   │   └── page.tsx            # Entry point page
│   │
│   └── 📂 components/          # Reusable UI components
│       ├── 🌸 Sakura.tsx        # Falling petal particle engine
│       ├── 🏠 Home.tsx          # Landing section
│       ├── 👤 About.tsx         # About me
│       ├── ⚡ Skills.tsx        # Skills showcase
│       ├── 🚀 Projects.tsx      # Projects gallery
│       ├── 🎓 Education.tsx     # Education timeline
│       ├── 🏅 Certifications.tsx
│       └── 📬 Contact.tsx       # Contact form
│
├── ⚙️  next.config.mjs          # Next.js configuration
├── 🎨  tailwind.config.ts       # Tailwind + custom theme
├── 🔷  tsconfig.json            # TypeScript configuration
├── ⚙️  postcss.config.mjs       # PostCSS pipeline
├── 🔧  .eslintrc.json           # ESLint rules
└── 📦  package.json             # Dependencies
```

---

<div align="center">

## 🚀 Run Locally

</div>

```bash
# 1. Clone the repository
git clone https://github.com/rohan178k/Anime-Theme-Portfolio.git

# 2. Navigate into the project
cd Anime-Theme-Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — the sakura petals will greet you. 🌸

---

<div align="center">

## 📊 Repository Stats


<!-- Streak stats — using primary herokuapp domain with correct query param format -->
<img src="https://github-readme-streak-stats.herokuapp.com/?user=rohan178k&theme=midnight-purple&hide_border=true&background=0D0D1A&ring=C084FC&fire=EC4899&currStreakLabel=C084FC" height="150"/>

<br/><br/>

![TypeScript](https://img.shields.io/badge/TypeScript-98.8%25-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

<div align="center">

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                   ANIMATED FOOTER BANNER                  -->
<!-- ═══════════════════════════════════════════════════════════ -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:ec4899,50:7c3aed,100:1a1a2e&height=130&section=footer&text=Made%20with%20%E2%9D%A4%EF%B8%8F%20by%20Rohan%20Kusmude&fontSize=20&fontColor=ffffff&fontAlignY=65&animation=fadeIn" width="100%"/>

⭐ **Found this portfolio inspiring? Drop a star!**

[![GitHub stars](https://img.shields.io/github/stars/rohan178k/Anime-Theme-Portfolio?style=social)](https://github.com/rohan178k/Anime-Theme-Portfolio/stargazers)
&nbsp;
[![GitHub forks](https://img.shields.io/github/forks/rohan178k/Anime-Theme-Portfolio?style=social)](https://github.com/rohan178k/Anime-Theme-Portfolio/network/members)

</div>
