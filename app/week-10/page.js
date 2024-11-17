"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context"

export default function SignInPage() {

    const{user, gitHubSignIn, firebaseSignOut} = useUserAuth();
    
    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <main className="m-5">
            <header>
                <h1 className="text-center text-3xl">Shopping List - Account</h1>
            </header>
            {user ? (
                <div>
                    <p>Welcome to shopping list app!</p>
                    <p>You are logged in as {user.email}.</p>
                    <Link className="text-blue-700" href="/week-10/shopping-list/">Click here to go to shopping list.</Link>
                    <div>
                        <button type="button" className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4" onClick={handleSignOut}>Sign Out</button>
                    </div>
                </div>
            ) : (
                <div>
                    <button type="button" className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4" onClick={handleSignIn}>Sign In with Github</button>
                </div>
            )}
        </main>
    )
}