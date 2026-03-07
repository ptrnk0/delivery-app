# Nectar

![Nectar](./assets/splash-icon.png)

A delivery app built with React Native and Expo.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Xcode](https://developer.apple.com/xcode/) (iOS)
- [Android Studio](https://developer.android.com/studio) (Android)

### Install dependencies

```bash
npm install
```

### First run — build the dev client

The project uses `expo-dev-client`, so you need to build the native app before starting the dev server.

```bash
npm run ios      # builds and runs on a connected iOS device
npm run android  # builds and runs on an Android emulator or device
```

### Subsequent runs

Once the dev client is installed on your device, you can start the Metro bundler directly:

```bash
npm start
```

Use `npm run start:clear` to clear the Metro cache if you run into stale bundle issues.
