# AI-Native Travel Platform – Invite Form Assignment

This project is a pixel-perfect, modern invite creation form for an AI-native travel platform. It demonstrates advanced UI craft, state management, and video export using Remotion. The assignment was completed as part of a job application and follows all requirements outlined in the provided brief.

---

## Table of Contents

- [Assignment Overview](#assignment-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Code Highlights](#code-highlights)
- [Screenshots](#screenshots)
- [Prepared By](#prepared-by)

---

## Assignment Overview

**Goal:**  
Recreate a pixel-perfect replica of the invite form (see attached image) with support for:
- Image and MP4 background themes
- Invite preview and save functionality
- Video display and export using Remotion.dev

**Core Requirements:**
- Pixel-perfect, responsive UI matching the provided design
- Support for both image and MP4 video backgrounds
- Separate "Cover Image" and "Background Theme" components
- Save and preview invite functionality
- Remotion-based video display and export
- Clean state management (Context API)
- Modern, maintainable codebase

---

## Features

- **Pixel-Perfect Invite Form:**  
  Matches the provided design for event creation, including all required fields and layout.
- **Theme Support:**  
  Select either an image or an MP4 video as the invite background theme.
- **Cover Image Upload:**  
  Upload a separate cover image for the invite.
- **Live Preview:**  
  Instantly preview the invite with the selected theme and form data.
- **Save Invite:**  
  Persist form data (dummy save in Step A; API integration in Step B).
- **Remotion Video Export:**  
  Display the invite as a video and allow download as MP4.
- **Responsive Design:**  
  Works seamlessly on desktop and mobile.
- **Modern UI:**  
  Built with Tailwind CSS for a clean, professional look.
- **State Management:**  
  Uses React Context API for global state.
- **Accessibility:**  
  Keyboard navigation and focus management.

---

## Tech Stack

- **React** (with Next.js recommended)
- **Tailwind CSS** (or CSS Modules/styled-components)
- **Lucide React** (icon library)
- **Remotion.dev** (video rendering and export)
- **Context API** (state management)
- **JavaScript (ES6+)**

---

## Project Structure

```
public/
│
├── lighthouse.mp4
├── firewood.mp4
├── waterfall.mp4
├── mountain.mp4
│
src/
│
├── components/
│   ├── EventCreation.jsx
│   ├── ThemeSelector.jsx
│   ├── RemotionVideo.jsx
│   ├── VideoPlayer.jsx
│   └── Image.jsx
│
├── context/
│   ├── ContextProvider.jsx
│   └── Context.js
│
├── pages/
│   ├── Create.jsx
│   └── View.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## How to Run

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app is available at [https://assignment-often.vercel.app/](https://assignment-often.vercel.app/).

---

## Code Highlights

- **Pixel-Perfect UI:**  
  All styles and layout are crafted to match the provided design exactly, using Tailwind CSS utility classes.
- **Theme & Media Handling:**  
  Supports both image and MP4 video backgrounds, with live preview and seamless switching.
- **Remotion Integration:**  
  Invite can be rendered and exported as a video using Remotion.dev.
- **State Management:**  
  All form and UI state is managed via React Context for maintainability and scalability.
- **Routing:**  
  `/create` for the form, `/view` for previewing the invite.

---

## Screenshots

> ![Invite Creation Screenshot](/public/screenshot.png)
>
> *Pixel-perfect, modern, and responsive invite creation UI.*

---

## Prepared By

*Shaurya Pratap Singh*  
*Contact: singhpratap.shaurya8@gmail.com*
