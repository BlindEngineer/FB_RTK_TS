import React from 'react';
import Form from "./Form";
//импорт для Фаербейса
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setUser} from "store/slices/userSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux-hooks";
const Login = () => {
  const dispatch = useAppDispatch();

const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        // @ts-ignore
        dispatch(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }));
        navigate('/');
      })
      .catch(err => console.warn(err))
  }
  return (
    <Form title='sign in' handleClick={handleLogin}/>
  );
};

export default Login;