import React from 'react';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "../firebase/clientApp";

const uiConfig = {
    signInSuccessUrl: "/",

    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],

}

export default function SignInScreen() { 
    return(
        <div
            style={{
                maxWidth: "320px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1>login</h1>
            <p>please sign in</p>
            {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
        </div>
    )
}