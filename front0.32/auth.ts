import NextAuth from 'next-auth'

import authConfig from '@/auth.config';
import { getUserById } from '@/data/user';

import { PrismaAdapter } from '@auth/prisma-adapter';
import {db } from '@/lib/db';

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut,

} = NextAuth({
    ...authConfig,
    events: {
        async linkAccount({user}) {
            await db.user.update({
                where: {id: user.id},
                data: {emailVerified: new Date()},
            });
        }
    },
    callbacks: {
        async session({token, session}) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role;
            }

            if (token.isWhitelisted && session.user) {
                session.user.isWhitelisted = token.isWhitelisted as boolean;
            }

            return session;
        },
        async jwt({token}) {
            if (!token.sub) return token;
        
            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.role = existingUser.role;
            token.isWhitelisted = existingUser.isWhitelisted;
        
            return token;
        },
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt'},
}); 
