import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from './../../Firebase/firebase';
import { useDispatch } from "react-redux";
import { setUserAC } from "../../redux/UserReducer";
import s from './Login.module.css';
import gooImg from './../../images/gooBtn.png';

const LoginForm = () => {
  const dispatch = useDispatch();
  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        dispatch(setUserAC(true, result.user.displayName, result.user.email, result.user.photoURL));
        /* setImgUrl(result.user.photoURL);
        setFullName(result.user.displayName);
        setUser(true);
        console.log(result.user.displayName);
        console.log(result.user.photoURL); */

      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className={s.formBody}>
        <div className={s.formContent}>
          <div>Please log in with:</div>
         <button className={s.btnGoogle} onClick={signInGoogle}><img src={gooImg} alt="" />Sign in with Google</button>
         
        </div>
      </div>
      {/* <div className={s.btnGoogle}><img src={gooImg} alt="" />dvfsdv</div> */}

    </div>
  )
}
export default LoginForm;