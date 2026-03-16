# MOA Kindergarten Progress Tracker
### Setup Guide — Firebase + Vercel

---

## Overview
React app with Firebase Firestore (real-time database) and Firebase Auth.
Multiple teachers can use it simultaneously on any device.
Installable on iPad as a home-screen app.

---

## Step 1 — Create a Firebase Project

1. Go to https://console.firebase.google.com
2. Click **Add project** → name it `moa-tracker` → Continue
3. Disable Google Analytics (not needed) → **Create project**

---

## Step 2 — Enable Authentication

1. In Firebase Console → **Authentication** → **Get started**
2. Under **Sign-in method**, enable **Email/Password**
3. Save

---

## Step 3 — Create Firestore Database

1. In Firebase Console → **Firestore Database** → **Create database**
2. Choose **Start in production mode** → select your region (us-central1) → **Enable**
3. Go to **Rules** tab and replace the content with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /students/{studentId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

4. Click **Publish**

---

## Step 4 — Add a Web App & Get Config

1. In Firebase Console → ⚙️ **Project Settings** → **Your apps** → click **</>** (Web)
2. Register app as `moa-tracker-web` → Continue
3. Copy the `firebaseConfig` object shown
4. Open `src/firebase/config.js` and replace the placeholder values:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "moa-tracker.firebaseapp.com",
  projectId: "moa-tracker",
  storageBucket: "moa-tracker.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## Step 5 — Push to GitHub

```bash
cd moa-tracker
git init
git add .
git commit -m "Initial commit"
# Create a new repo at github.com then:
git remote add origin https://github.com/YOUR_USERNAME/moa-tracker.git
git push -u origin main
```

---

## Step 6 — Deploy to Vercel

1. Go to https://vercel.com → **Add New Project**
2. Import your GitHub repo
3. Framework Preset: **Create React App**
4. Click **Deploy** — done! Vercel gives you a URL like `moa-tracker.vercel.app`

---

## Step 7 — Create Teacher Accounts

1. Open your deployed app URL
2. Click **"First time? Create an account"**
3. Create accounts for each teacher using their email addresses
4. Share the URL + credentials with each teacher

---

## Step 8 — Add to iPad Home Screen

On each teacher's iPad:
1. Open the app URL in **Safari**
2. Tap the **Share button** (box with arrow)
3. Tap **Add to Home Screen**
4. Name it **MOA Tracker** → Add
5. It will appear as an app icon and run full-screen

---

## Project Structure

```
src/
  firebase/
    config.js          ← Firebase credentials (fill in Step 4)
    AuthContext.jsx    ← Login/logout/auth state
    useStudentData.js  ← Real-time Firestore sync
  data/
    curriculum.js      ← All skills, sections, student names
  components/
    LoginPage.jsx      ← Teacher sign-in screen
    LessonsView.jsx    ← Browse by lesson, mark skills
    ReportView.jsx     ← Per-student progress report
    ClassView.jsx      ← All students × all skills matrix
    SkillModal.jsx     ← Tap a skill to update all students
  App.jsx              ← Root with auth gating
  index.css            ← Full stylesheet
```

---

## Adding/Removing Students

Edit `src/data/curriculum.js` — the `STUDENTS` array at the top:

```js
export const STUDENTS = [
  'Gregory Dugas',
  'George Johnson',
  // add or remove names here
];
```

---

## Local Development

```bash
npm install
npm start
```

Runs at http://localhost:3000
