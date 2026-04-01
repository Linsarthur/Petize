import { createContext, useContext, useState } from "react";
import type { userProps } from "../types/user";
import { UserSchema } from "../schemas/github";

type UserContextType = {
  user: userProps | null;
  repos: Repo[];
  setRepos: React.Dispatch<React.SetStateAction<Repo[]>>;
  error: string | null;
  loadUser: (userName: string) => Promise<void>;
};

export type Repo = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
};

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<userProps | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const loadUser = async (userName: string) => {
    setError(null);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}`, {
      headers,
    });
    const data = await res.json();

    if (data.message === "Not Found") {
      setError("Not found");
      return;
    }

    const parsed = UserSchema.safeParse(data);

    if (!parsed.success) {
      setError("parseError");
      return;
    }

    setUser({
      avatar_url: parsed.data.avatar_url,
      login: parsed.data.login,
      name: parsed.data.name ?? "",
      bio: parsed.data.bio ?? "",
      location: parsed.data.location ?? "",
      followers: parsed.data.followers,
      following: parsed.data.following,
      company: parsed.data.company ?? "",
      email: parsed.data.email ?? "",
      twitterUserName: parsed.data.twitter_username ?? "",
      siteAdmin: String(parsed.data.site_admin),
      blog: parsed.data.blog ?? "",
    });
  };

  return (
    <UserContext.Provider value={{ user, repos, setRepos, error, loadUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
