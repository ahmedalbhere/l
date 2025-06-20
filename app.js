import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update, get } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-storage.js";

// تكوين Firebase الخاص بك
const firebaseConfig = {
  apiKey: "AIzaSyBKiwe5N243hbY7aebag4T3mBVAYHG7oe4",
  authDomain: "barbers-b78f6.firebaseapp.com",
  databaseURL: "https://barbers-b78f6-default-rtdb.firebaseio.com",
  projectId: "barbers-b78f6",
  storageBucket: "barbers-b78f6.appspot.com",
  messagingSenderId: "1060861268772",
  appId: "1:1060861268772:web:7641869f6b139766ce99b1",
  measurementId: "G-0S6S9HJD8R"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

// متغيرات التطبيق
let currentUser = null;
let currentUserType = null;

// ... (جميع الدوال الأخرى تبقى كما هي تماماً كما في الكود السابق)
// clientLogin(), barberSignup(), barberLogin(), showClientDashboard(), showBarberDashboard()
// loadBarbers(), bookAppointment(), showCurrentBooking(), cancelBooking()
// loadBarberQueue(), completeClient(), logout(), generateId()

// جعل الدوال متاحة globally
window.showScreen = showScreen;
window.clientLogin = clientLogin;
window.barberLogin = barberLogin;
window.barberSignup = barberSignup;
window.showBarberSignup = showBarberSignup;
window.showBarberLogin = showBarberLogin;
window.bookAppointment = bookAppointment;
window.completeClient = completeClient;
window.logout = logout;

// مراقبة حالة المصادقة
onAuthStateChanged(auth, (user) => {
    if (user && currentUserType === 'barber') {
        showBarberDashboard();
        loadBarberQueue();
    }
});

// تهيئة التطبيق
showScreen('roleSelection');
