import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    // deploy korar somy url change kore dibo//
    baseURL: "http://localhost:3000"
})