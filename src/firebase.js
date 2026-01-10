import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";

// 🔥 Firebase config (VITE)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ SIGNUP
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email: user.email,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

// ✅ LOGIN
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

// ✅ LOGOUT
const logout = async () => {
  await signOut(auth);
};

export { auth, db, signup, login, logout };
