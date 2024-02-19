//кастомный хук, позволяющий в любой точке приложения узнать,
//авторизован ли пользователь и его данные

import {useAppSelector} from "./redux-hooks";

export function useAuth() {
  const {email, token, id} = useAppSelector(state => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}