import GitHub from "next-auth/providers/github";
import AzureADProvider from "next-auth/providers/azure-ad";

import type { NextAuthConfig } from "next-auth";


export default {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        AzureADProvider({
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID,
        }),
    ],
} satisfies NextAuthConfig

