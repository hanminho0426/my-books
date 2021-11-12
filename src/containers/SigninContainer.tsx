import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Signin from "../components/Signin";
import { login as loginSagaStrat } from "../redux/modules/auth";

export default function SigninContainer() {
  const dispatch = useDispatch();

  const login = useCallback(
    (reqData) => {
      dispatch(loginSagaStrat(reqData));
    },
    [dispatch]
  );

  return <Signin login={login} />;
}
