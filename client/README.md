## aimeelramirezProjectCOS590-O client\

```
- src
  - components
    - AnimatedLoading.tsx
    - ObservableSubscriber.tsx
    - OnboardingScreen.tsx
    - animatedComponents
      - DraggableComponent
        - DraggableComponent.tsx
      - LiquidSwipe
        - LiquidSwipe.tsx
      - ProgressBar
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
  Project structure

  ```
  get the api from scripts/plaid/get.sh to recieve:

 "client_id": "'"${PLAID_CLIENT_ID}"'",
    "secret": "'"${PLAID_SECRET}"'",
    "user": {
      "client_user_id": "unique_user_id"
    },
    "products": ["'"${PLAID_PRODUCTS}"'"],
    "country_codes": ["'"${PLAID_COUNTRY_CODES}"'"],
    "language": "'"${PLAID_LANGUAGE}"'",
     "client_name":"user_good"
on body
headers
Content-Type: application/json

on post
https://github.com/plaid/plaid-node?tab=readme-ov-file#getting-started

```