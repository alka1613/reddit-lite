# 📱 Reddit Lite

A lightweight **Reddit clone** built with **React Native** and **Expo**, showcasing bottom tab navigation (Feed, Search, Profile) and a clean mobile-first design.

---

## 🚀 Features
- **Feed Tab** → Displays posts (dummy for now, can be extended with Reddit API).  
- **Search Tab** → Placeholder for search functionality.  
- **Profile Tab** → Simple user profile page.  
- **Bottom Tab Navigation** → Smooth navigation using React Navigation.  
- **Cross-platform** → Works on Android, iOS, and Web via Expo.  

---

## 🛠️ Tech Stack
This project uses:

- **[Expo](https://expo.dev/)** → Easiest way to build React Native apps.  
- **React Native** → Core mobile framework.  
- **React Navigation** (`@react-navigation/native`, `@react-navigation/bottom-tabs`) → Handles navigation between screens.  
- **Expo Vector Icons** → Provides high-quality icons (Ionicons used here).  
- **Expo Splash Screen & Status Bar** → Manages app loading screen and status bar style.  

---

## 📂 Project Structure

```
reddit-lite/
│── assets/                  # App icons, splash, etc.
│── screens/                 # App screens (Feed, Search, Profile)
│── App.js                   # Main app entry with navigation
│── index.js                 # Expo entry point
│── app.json                 # Expo project configuration
│── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (LTS recommended)  
- [Expo Go](https://expo.dev/client) app on your mobile (Android/iOS)  

Check versions:
```sh
node -v
npm -v
```

---

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/reddit-lite.git
cd reddit-lite
```

---

### 3️⃣ Install Dependencies
```sh
npm install
```

---

### 4️⃣ Run the Project
Start Expo development server:
```sh
npx expo start
```

You will see a **QR code** in the terminal.  
- 📱 Scan with **Expo Go app** on your phone.  
- 💻 Or press **w** to run in the browser, **a** for Android emulator, **i** for iOS simulator.

---

## 🔑 Key Libraries Used

### 1. React Navigation  
We used `@react-navigation/bottom-tabs` for a clean **tab bar UI** with icons.  
```js
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
```

### 2. Expo Vector Icons  
Provides professional icons (we used **Ionicons** for Home, Search, Profile).  
```js
import { Ionicons } from "@expo/vector-icons";
```

### 3. Platform + StatusBar Handling  
Ensures proper spacing and status bar appearance across iOS and Android.  
```js
<View style={{ height: Platform.OS === "android" ? StatusBar.currentHeight : 0 }} />
```

---

## 🖼️ Screens (Current)
- **FeedScreen.js** → Placeholder feed UI  
- **SearchScreen.js** → Placeholder search UI  
- **ProfileScreen.js** → Placeholder profile UI  

👉 You can extend these with actual Reddit API data.

---

## 🌱 Future Improvements
- Connect with **Reddit API** for live data.  
- Add **Dark Mode** using Expo System UI.  
- Add **Post Details & Comments Screen**.  
- Implement **User Authentication**.  

---

## 📝 License
MIT License © 2025  
