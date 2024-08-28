import "./Login.scss";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

export const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="login">
      <div className="login_container">
        <p className="login_title">Welcome to Chat-app!</p>
        <div className="login_btn">
          <button onClick={signIn}>ログイン</button>
        </div>
      </div>
    </div>
  )
};
