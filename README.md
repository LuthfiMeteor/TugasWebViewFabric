# 🌐 Portal Kampus - WebView Fabric App

A modern WebView mobile application built with **React Native CLI (New Architecture / Fabric)** to access the campus portal (**Universitas Langlangbuana - UNLA**). Equipped with full navigation controls, hardware back button support, and native performance.

## ✨ Features

- 🏛️ **Campus Portal Access**: Direct integration with [UNLA Portal](https://www.unla.ac.id) via React Native WebView.
- ⚡ **New Architecture (Fabric)**: Optimized performance with React Native's modern Fabric rendering engine.
- 🧭 **Bottom Navigation Bar**: Clean bottom controls for intuitive browser navigation:
  - **Prev**: Navigate back to previous page (auto-disabled at start of history).
  - **Reload**: Refresh current web page.
  - **Next**: Navigate forward in history (auto-disabled when no forward history).
- 🔙 **Android Hardware Back Handler**: Intercepts Android physical/gesture back button to navigate history before exiting the app.
- 📱 **Responsive & Clean UI**: Styled with `SafeAreaView` and consistent theme colors.

## 🛠️ Tech Stack

| Tech | Version |
|------|---------|
| React Native | 0.87.1 (Fabric / New Architecture) |
| React | 19.2.3 |
| react-native-webview | ^14.0.1 |
| react-native-safe-area-context | ^5.5.2 |
| TypeScript | ^6.0.3 |

## 📁 Project Structure

```
TugasWebViewFabric/
├── android/                   # Native Android project files & Gradle build
├── ios/                       # Native iOS project files & Podfile
├── __tests__/                 # Jest unit tests
├── App.tsx                    # Main app component — WebView & navigation logic
├── index.js                   # Application entry point
├── app.json                   # React Native app configuration
├── metro.config.js            # Metro bundler configuration
├── babel.config.js            # Babel compiler configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## ⚙️ Prerequisites

Ensure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) (>= 22.11.0 recommended)
- [JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) (Amazon Corretto 17 or OpenJDK 17)
- [Android Studio](https://developer.android.com/studio) with:
  - Android SDK Platform (API 34 / 35)
  - Android SDK Build-Tools
  - Android Virtual Device (AVD) or physical Android device with USB Debugging enabled
- Package manager: **npm** or **bun**

---

## 🔧 Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd TugasWebViewFabric
```

### 2. Install dependencies

```bash
npm install
# or
bun install
```

---

## 🚀 Running the App

Unlike Expo projects, this app uses the **React Native Community CLI**. It compiles native Android/C++ code directly.

### Step 1: Configure Android Environment Variables (Linux / macOS)

Add these to your `~/.bashrc`, `~/.zshrc`, or profile file:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Then reload your shell:

```bash
source ~/.bashrc
# or
source ~/.zshrc
```

Verify your device/emulator is detected:

```bash
adb devices
# Expected output:
# List of devices attached
# emulator-5554   device (or your physical device ID)
```

### Step 2: Start Metro Bundler

In the first terminal window, start the Metro server:

```bash
npm start
# or
bun run start
```

### Step 3: Build and Run on Android

In a second terminal window (or let Metro automatically launch it), run:

```bash
npm run android
# or
bun run android
```

> **Note:** The first build may take a few minutes as Gradle downloads dependencies and compiles native Fabric/C++ components. Subsequent builds will be much faster.

---

## 📜 Available Scripts

```bash
npm start              # Start Metro bundler
npm run android        # Compile and install app on Android device/emulator
npm run ios            # Compile and run on iOS (macOS only)
npm run lint           # Run ESLint validation
npx tsc --noEmit       # Run TypeScript type check
npm test               # Run Jest tests
```

---

## 🐛 Troubleshooting

**1. Gradle build fails or dependencies conflict**
Clean the Android Gradle build cache and retry:
```bash
cd android
./gradlew clean
cd ..
npm run android
```

**2. Metro port 8081 is already in use**
Kill any existing process on port 8081:
```bash
npx react-native start --port 8088
# or kill the process:
lsof -i :8081 | awk 'NR>1 {print $2}' | xargs kill -9
```

**3. Device or emulator not detected**
Restart the ADB daemon:
```bash
adb kill-server && adb start-server
adb devices
```

**4. Metro cache issues**
Start Metro with cache cleared:
```bash
npx react-native start --reset-cache
```

---

## 📄 License

Built for **Mobile Programming** coursework.
