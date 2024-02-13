## aimeelramirezProjectCOS590-O client\

### Project Structure

```
- src
  - components
    - AnimatedLoading.tsx
    - ObservableSubscriber.tsx
    - OnboardingScreen.tsx
    - animatedComponents
        - DraggableComponent.tsx
        - LiquidSwipe.tsx
        - ProgressBar.tsx
  - styles
    - globalStyles.ts
    - DraggableComponentStyles.ts
    - LiquidSwipeStyles.ts
    - ProgressBarStyles.ts
  - actions
    - actionTypes.ts
    - authActions.ts
  - screens
    - AppContentScreen.tsx
    - LoadingScreen.tsx
    - HomeScreen.tsx
    - AnimatedScreen.tsx
  - services
    - ApiService.ts
  - store
    - reducers.ts
    - store.ts
  - App.tsx
```

### Plaid API Configuration

To use the Plaid API, follow these steps:

1. Get the API from scripts/plaid/get.sh to receive:

```json
{
  "client_id": "${PLAID_CLIENT_ID}",
  "secret": "${PLAID_SECRET}",
  "user": {
    "client_user_id": "unique_user_id"
  },
  "products": ["${PLAID_PRODUCTS}"],
  "country_codes": ["${PLAID_COUNTRY_CODES}"],
  "language": "${PLAID_LANGUAGE}",
  "client_name": "user_good"
}
```

2. On the body, add headers:

   ```
   Content-Type: application/json
   ```

3. Make a POST request to [Plaid API](https://github.com/plaid/plaid-node?tab=readme-ov-file#getting-started).

### Installing Dependencies

Run the following commands:

```
yarn clean
```

### Navigation

For navigation, refer to the [React Navigation Material Bottom Tab Navigator documentation](https://reactnavigation.org/docs/material-bottom-tab-navigator).

### TypeScript Configuration

If you encounter TypeScript errors, install @react-native-community/cli and TypeScript:

```
npm install -g @react-native-community/cli
npm install --save-dev typescript
```

Or with Yarn:

```
yarn global add @react-native-community/cli
yarn add --dev typescript
```

If you see errors like "error TS17004: Cannot use JSX unless the '--jsx' flag is provided," visit [TypeScript Errors Reference](https://typescript.tv/errors/#ts17004).

### Running Tests

Run the following command to execute tests:

```
yarn
yarn test
```

### TypeScript Compilation

To compile TypeScript code, use the following command:

```
tsc
```

### Running Shell Scripts

#### Using Bash Command:

If you have a Bash shell installed (you can install it using tools like Git Bash or Cygwin), you can use the bash command to execute script:

```
bash scripts/plaid/get.sh
```

#### Using Windows Subsystem for Linux (WSL):

If you have WSL installed, you can use wsl to run the script:

```
wsl sh scripts/plaid/get.sh
```


npm install redux @types/redux
or if you're using Yarn:

yarn add redux @types/redux
```
Make sure to include both 'redux' for the runtime package and '@types/redux' for TypeScript type declarations.