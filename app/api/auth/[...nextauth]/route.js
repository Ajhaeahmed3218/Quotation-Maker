import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ClientPageRoot } from "next/dist/client/components/client-page";

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            credentials: {
                userID: {
                    label: "UserID",
                    type: "text",
                    required: true,
                    placeholder: "Your userID",
                    name: "userID"
                },
                email: {
                    label: "Email",
                    type: "text",
                    required: true,
                    placeholder: "Your email",
                    name: "email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                    placeholder: "Your password",
                    name: "password"
                },

            },
            async authorize(credentials) {
                const { userID, email, password } = credentials;
                console.log("Credentials:", credentials);
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid Credentials");
                }

                if (email) {
                    const curentUser = user.find(u => u.email === email);
                    console.log(curentUser);
                    if (curentUser) {
                        if (curentUser.password === password && curentUser.userID === userID) {
                            return curentUser;
                        }
                    }
                }
                return null;
            },
        }),
    ],

    callbacks: {
         async jwt({ token, account, user }) {
            if (account) {
                token.type = user.type
            }
            return token
        },
        async session({ session, user, token }) {
            return session
        }
       
    }

});

const user = [
    { userID: "nuhash1188", name: "Nuhash", email: "nuhash3218@gmail.com", password: "123456", type: "admin" },
    { userID: "nobin2233", name: "Nobin", email: "nabz9988@gmail.com", password: "123456", type: "user" },
]

export { handler as GET, handler as POST };
