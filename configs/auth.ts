import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";

// const prodUrl = process.env.NEXTAUTH_PRODUCTION_URL || process.env.NEXTAUTH_URL;

export const authConfig: AuthOptions = {
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        })
    ],
    pages: {
        signIn: "/signIn"
    
    
    }
}