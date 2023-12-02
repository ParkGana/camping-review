# camping-review-app

---

### 프로젝트 실행

##### [ 모바일 기기 ]

npm start  
Expo Go 앱 실행 후 QR 스캔

<br/>

##### [ Android 에뮬레이터 ] [Android 에뮬레이터 (Android Studio) 설치 방법](https://docs.google.com/presentation/d/16aTNlCKriyH1oZ1Z8g1UM41ne9xVOdsFxHOhDflcqGE/edit?usp=sharing)

npm run android

<br/>

##### [ iOS 시뮬레이터 ] [iOS 시뮬레이터 (Xcode) 설치 방법](https://docs.google.com/presentation/d/1aYB6kJj1dxRIVaRPE-BHh8WExao8sSv8zwj2UfGvh2A/edit?usp=sharing)

npm run ios

---

### 프로젝트 설정

##### [ expo 프로젝트 생성 ]

npx create-expo-app . -t expo-template-blank-typescript

<br/>

##### [ navigation 사용 ]

npm install @react-navigation/native @react-navigation/native-stack --save  
npm install @react-navigation/bottom-tabs @react-navigation/material-top-tabs --save  
expo install react-native-screens react-native-safe-area-context
