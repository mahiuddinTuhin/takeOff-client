import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "./firebase.config";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const MainContext = createContext();
// console.log(auth);

const UserContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [placeCount, setPlaceCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const info = {
    createUser,
    login,
    googleSignIn,
    user,
    setUser,
    services,
    setServices,
    logout,
    loading,
    setLoading,
    updateUserProfile,
    reviews,
    setReviews,
    placeCount,
    setPlaceCount,
    searchQuery,
    setSearchQuery,
  };
  return (
    <div>
      <MainContext.Provider value={info}>{children}</MainContext.Provider>
    </div>
  );
};

export default UserContext;
