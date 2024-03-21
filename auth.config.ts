import GitHub from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "@auth/core/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

export default {
	providers: [
		GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
			allowDangerousEmailAccountLinking: true,
		}),
		DiscordProvider({
			clientId: process.env.DISCORD_ID,
			clientSecret: process.env.DISCORD_SECRET,
			allowDangerousEmailAccountLinking: true,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			allowDangerousEmailAccountLinking: true,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			async authorize(credentials) {
				// TODO: Add login logic
				console.log(credentials);

				return {
					email: `${credentials.email || "-_-"}`,
					id: "USER_ID",
					name: "Name",
				};
			},
		}),
	],
	callbacks: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		async signIn({ user, account, profile, email, credentials }): Promise<any> {
			return user;
		},
	},
	pages: {
		error: "auth-error",
	},
} satisfies NextAuthConfig;
