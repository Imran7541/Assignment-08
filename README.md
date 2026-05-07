# 🐄 QurbaniHat – Livestock Booking Platform

🌐 Live Site: https://assignment-08-ebon.vercel.app

---

## 📌 Overview

QurbaniHat is a modern livestock booking platform where users can explore animals for Qurbani, view details, and place bookings after authentication. The system ensures a smooth and secure user experience with responsive design and clean UI.

---

## ✨ Features

- 🔐 Authentication (Email/Password + Google Login)
- 🐮 Browse and view livestock animals
- 📄 Detailed animal information page
- 🧾 Booking form with success notification
- 👤 User profile with update functionality
- ⚡ Loading states and toast notifications
- 📱 Fully responsive design (Mobile, Tablet, Desktop)
- 🚫 Custom 404 page

---

## 📂 Routes

### Public Routes

- `/` → Home
- `/animals` → All Animals
- `/login` → Login Page
- `/register` → Register Page

### Private Routes

- `/details/:id` → Animal Details + Booking
- `/my-profile` → User Profile

---

## 🛠️ Tech Stack

- Next.js / React
- Tailwind CSS
- Firebase Auth
- React Toastify
- Animate.css

---

## ⚙️ Environment Variables

````env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
``` id="env01"

---

## 🧠 Key Challenges

- Profile view & update system
- Google authentication integration
- Protected routes implementation
- Booking form with validation & reset
- UI responsiveness across all devices

---


