import { authService } from "@/components/common/services";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const payload = {
                    token_type: credentials.token_type,
                    access_token: credentials.access_token,
                }

                try {
                    const response = await authService.login(payload)

                    if (response.data.status == 200) {
                        const user = {
                            token: response.data.token,
                            data: response.data.data,
                        }
                        return user
                    } else {
                        return null
                    }

                } catch (error) {
                    console.log("Error: ", error);
                    return null
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token, user }) {
            session.user = token;
            return session
        },
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
            } else {
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

export default NextAuth(authOptions)