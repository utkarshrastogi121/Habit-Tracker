# Habit Tracker 📱  
A cross-platform Habit Tracker app built with React Native, Expo, and Appwrite — designed to help users build, track, and maintain daily habits.

---

## ✨ Features

- ✅ Create, edit, and delete habits  
- 📊 Track habit progress and streaks  
- ☁️ Cloud-based Database with Appwrite  
- 🎯 Clean and user-friendly mobile interface  

---

## 🛠️ Tech Stack

- **Frontend**: React Native + Expo  
- **Backend as a Service**: [Appwrite](https://appwrite.io/)  
- **Authentication**: Appwrite Auth 
- **Database**: Appwrite Cloud Database  
- **Navigation**: Expo Router  

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js  
- Expo CLI  
- Appwrite

### Clone the Repository
```bash
git clone https://github.com/utkarshrastogi121/Habit-Tracker.git
cd Habit-Tracker
```

### Install Dependencies
```bash
npm install
```

### Configure Appwrite  
1. Create a project in your [Appwrite Console](https://console.appwrite.io/)  
2. Set up **Authentication** and create a **Database Collection** for Habits  
3. Get your **Appwrite Project ID** and **Endpoint**  
4. Add these to your environment/config:
```
APPWRITE_PROJECT_ID=your_project_id  
APPWRITE_ENDPOINT=https://your-appwrite-endpoint  
```

---

### Start the App
```bash
npx expo start
```
