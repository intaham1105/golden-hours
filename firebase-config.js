// Firebase 설정 (이름 중복 확인 · 서버 저장용)
// 비워 두면(null) 서버 없이 동작: 저장은 각자 브라우저에, 이름 중복은 그 기기 안에서만 확인
// Firebase 콘솔 → 프로젝트 설정(톱니바퀴) → 일반 → 내 앱 → 웹 앱의 "SDK 설정 및 구성"에 나오는
// firebaseConfig 값을 아래처럼 붙여 넣으면 된다. 이 값은 공개돼도 괜찮은 값이다 (보안은 firestore.rules가 지킨다)
window.GOLDEN_FIREBASE = null;
/*
window.GOLDEN_FIREBASE = {
  apiKey: "AIza...",
  authDomain: "프로젝트ID.firebaseapp.com",
  projectId: "프로젝트ID",
  appId: "1:...:web:..."
};
*/
