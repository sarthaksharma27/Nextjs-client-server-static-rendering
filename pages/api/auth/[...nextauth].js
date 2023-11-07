import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'PUT_YOURS',
            clientSecret: 'PUT_YOURS'
        })
    ]
}