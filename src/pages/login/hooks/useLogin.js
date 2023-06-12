import React, { useState } from "react";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import {
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
  saveUserInDB,
  getUsers,
} from "../../../services/firebase.services";
import { AUTH_LOGIN, authKey } from "../../../core/auth/reducers/authReducer";

const useLogin = () => {
  const { dispatch: dispatchAuth } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const _saveInStorages = async (res, saveInDB = true) => {
    localStorage.setItem(
      authKey,
      JSON.stringify({
        isAuth: true,
        user: res.user,
      })
    );

    if (!saveInDB) return;

    const users = await getUsers();
    const isRegistered = users.find((user) => user.id === res.user.uid);

    if (!isRegistered) saveUserInDB(res.user);
  };

  const signInGoogle = async () => {
    try {
      const res = await signInWithGoogle();

      if (!res) return;

      _saveInStorages(res);

      dispatchAuth({
        type: AUTH_LOGIN,
        payload: res.user,
      });
    } catch (error) {
      return;
    }
  };

  const signUpEmail = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = form;

      if (!email || !password) return;

      const res = await signUpWithEmail(email, password);

      if (!res) return;

      _saveInStorages(res);

      dispatchAuth({
        type: AUTH_LOGIN,
        payload: res.user,
      });
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        alert("El correo ya está en uso");
        return;
      }

      if (error.code === "auth/invalid-email") {
        alert("El correo no es válido");
        return;
      }
    }
  };

  const signInEmail = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = form;

      if (!email || !password) return;

      const res = await signInWithEmail(email, password);

      if (!res) return;

      _saveInStorages(res, false);

      dispatchAuth({
        type: AUTH_LOGIN,
        payload: res.user,
      });
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Usuario no encontrado");
        return;
      }

      if (error.code === "auth/wrong-password") {
        alert("Contraseña incorrecta");
        return;
      }
    }
  };

  return { form, setForm, signInEmail, signInGoogle, signUpEmail };
};

export default useLogin;
