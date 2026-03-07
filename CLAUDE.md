# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start              # Start Expo dev server
npm run start:clear    # Start with cleared Metro cache
npm run ios            # Run on iOS device
npm run android        # Run on Android
npm run lint           # Run ESLint via expo lint
```

There are no automated tests in this project.

## Architecture

React Native / Expo app named **Nectar**, using **Feature-Sliced Design (FSD)** with the new React Native architecture enabled.

### FSD Layer Map

```
src/
├── app/
│   ├── entrypoint/App.tsx       # Root component — wraps providers
│   ├── routes/Routes.tsx        # Navigation tree (static API)
│   └── providers/session/       # SessionProvider (wraps Routes)
├── entities/
│   └── session/                 # IUser, TypeUserState, IContext, SessionContext, useSession
├── pages/
│   ├── auth/                    # Auth screen + AuthFields, IAuthFormData
│   ├── home/
│   ├── cart/
│   ├── explore/
│   ├── favourite/
│   └── user/
└── shared/
    ├── ui/                      # Button, Field, Text, icons, TabBar (each with index.ts)
    └── lib/navigation/          # RootStackParamList, useTypedNavigation
```

Each slice exposes a public API via `index.ts`. Import only from the slice root, not deep paths.

### Path Alias

`@/*` maps to `src/*` (configured in `tsconfig.json`). Always use `@/` for cross-slice imports.

### Navigation

Uses React Navigation **static API** (`createStaticNavigation`). The root stack has two groups:

- `SignedIn` — renders `BottomTab` (Home, Cart, Explore, Favourite, User) when `!user`
- `SignedOut` — renders `Auth` screen when `!!user`

Auth gating is done via `if` conditions in the navigator groups, reading from `useSession()`.

### Session / Auth

`SessionContext` holds `{ user, setUser }`. `SessionProvider` (in `app/providers/`) manages splash screen hide and user state. Access session state anywhere via `useSession()` from `@/entities/session`.

### Styling

**NativeWind v5** (Tailwind for React Native). Global styles imported in `App.tsx` via `global.css`. Use Tailwind utility classes via the `className` prop. Poppins font family is bundled via `expo-font` plugin (weights Thin–Black).

### Key Libraries

- `react-hook-form` — form state management
- `react-native-keyboard-controller` — keyboard handling (wraps app root)
- `react-native-reanimated` — animations
- `react-native-svg` — SVG icons
- `clsx` — conditional className merging

## Conventions

- FSD import direction: `app` → `pages` → `entities` → `shared` (never reverse)
