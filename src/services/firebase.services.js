import {
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../core/config/firebase";
import {
  DOCUMENTS,
  createDocument,
  getDocumentById,
  getDocuments,
  updateDocument,
} from "../core/db/firestore.db";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  return user;
};

export const signInWithEmail = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signUpWithEmail = async (email, password) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const signOut = async () => {
  await auth.signOut();
};

export const saveUserInDB = async (user) => {
  const userDB = {
    id: user.uid,
    email: user.email,
    name: user.displayName,
    photo: user.photoURL,
  };

  const res = await createDocument(DOCUMENTS.USERS, userDB);

  return res;
};

export const getUsers = async () => {
  const users = await getDocuments(DOCUMENTS.USERS);

  return users;
};

export const updateFavorites = async (userId, favorites) => {
  const res = await updateDocument(userId, DOCUMENTS.FAVORITES, favorites);

  return res;
};

export const getFavorites = async (userId) => {
  const favorites = await getDocumentById(userId, DOCUMENTS.FAVORITES);

  const userFavorites = favorites || { data: [] };

  return userFavorites.data;
};
