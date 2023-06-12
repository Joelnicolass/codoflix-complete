import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";

export const createDocument = async (name, data) => {
  const refDoc = await addDoc(collection(db, name), data);

  return refDoc;
};

export const getDocuments = async (name) => {
  const querySnapshot = await getDocs(collection(db, name));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

export const updateDocument = async (id, name, data) => {
  const refDoc = await setDoc(doc(db, name, id), { data });

  return refDoc;
};

export const getDocumentById = async (id, name) => {
  const docRef = doc(db, name, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};

export const DOCUMENTS = {
  USERS: "users",
  FAVORITES: "favorites",
};
