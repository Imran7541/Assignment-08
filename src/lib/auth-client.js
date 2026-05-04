import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    // deploy korar somy url change kore dibo//
    baseURL: process.env.BETTER_AUTH_URL
})
export const { signIn, signUp, useSession } = createAuthClient();