import React from 'react';
import Form from "./Form";
//импорт для Фаербейса
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import {setUser} from "store/slices/userSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux-hooks";
const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword (auth, email, password)
      .then(({user}) => {
        console.log(user);
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
    <Form title='register' handleClick={handleRegister}/>
  );
};

export default SignUp;