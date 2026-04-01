import { z } from "zod";

export const UserSchema = z.object({
  avatar_url: z.string().url(),
  login: z.string(),
  name: z.string().nullable(),
  bio: z.string().nullable(),
  location: z.string().nullable(),
  followers: z.number(),
  following: z.number(),
  company: z.string().nullable(),
  email: z.string().nullable(),
  twitter_username: z.string().nullable(),
  site_admin: z.boolean(),
  blog: z.string().nullable(),
});

export const RepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  stargazers_count: z.number(),
  updated_at: z.string(),
  html_url: z.string().url(),
});

export const RepoListSchema = z.array(RepoSchema);

export type UserType = z.infer<typeof UserSchema>;
export type RepoType = z.infer<typeof RepoSchema>;