# Evolving React
## A cross-platform React Native app for the Evolving Web
### Built with Expo, React Native, Next.js, Solito, and Tauri

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [Expo](https://expo.io/)
- [Tauri](https://tauri.studio/en/)
- [Rust](https://www.rust-lang.org/tools/install)
- [Android Studio](https://developer.android.com/studio)
- [Android SDK](https://developer.android.com/studio#downloads)
- [Java JDK 18](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Device or emulator](https://developer.android.com/studio/run/managing-avds)


### Installing

Clone the repository and install dependencies:

```bash
git clone https://github.com/Evolving-Software/evolving-react.git
cd evolving-react
yarn
```

### Development

To run the app in development mode and load all of the platforms at once, run:
```bash
yarn dev
```

To run the app in development mode for a specific platform, run:
```bash
yarn dev:web
yarn dev:android
yarn dev:ios
yarn dev:desktop
```