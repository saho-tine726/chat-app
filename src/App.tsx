import { useEffect } from "react";
import "./App.scss";
import { auth } from "./firebase";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { login, logout } from "./features/userSlice";
import { Side } from "./components/side/Side";
import { Main } from "./components/main/Main";
import { Login } from "./components/login/Login";

function App() {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Side />
          <Main />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
