// Firebase 구성 정보
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVSRtLwQCOghCKGpaPbYfkEDdx2jRNsbA",
  authDomain: "flutterfordemoapp-fa846.firebaseapp.com",
  databaseURL: "https://flutterfordemoapp-fa846-default-rtdb.firebaseio.com",
  projectId: "flutterfordemoapp-fa846",
  storageBucket: "flutterfordemoapp-fa846.appspot.com",
  messagingSenderId: "600417929547",
  appId: "1:600417929547:web:bcd00689b92699c77bc0ce",
  measurementId: "G-20VYMF6XTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 데이터베이스에서 데이터 가져오기
export function fetchBookingData(bookingId) {
    const bookingRef = ref(database, 'bookings/' + bookingId);
    onValue(bookingRef, (snapshot) => {
        const data = snapshot.val();
        // 데이터를 가져온 후에 처리하는 코드를 작성합니다.
        // 예를 들어, 가져온 데이터를 HTML에 표시하는 등의 작업을 수행할 수 있습니다.
        console.log(data);
    });
}
