import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const TwitterProvider = new TwitterAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);

        })
        .catch(error =>{
            console.log(error);
            setUser(null);
        })
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);

        })
        .catch(error => console.log(error));
        setUser(null)
    }

    const handleTwitterSignIn = () =>{
        signInWithPopup(auth, TwitterProvider)
        .then(result => { setUser(result.user)})
        .catch(error => console.log(error))
    }


    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{
            console.log('sign out done');
            setUser(null);
        })
        .catch(error => console.log(error));
    }
    return (
        <>
       
        
        {
            user ? <button onClick={handleSignOut}>sign Out</button>:
            <>
             <button onClick={handleGoogleSignIn}>Login with google</button>
             <button onClick={handleGithubSignIn}>login with github</button>
             <button onClick={handleTwitterSignIn}>login with twitter</button>
            </>
        }

        {
            user && <div>
                <h3>name: {user.displayName}</h3>
                <p>email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
        }          
        </>
    );
};

export default Login;