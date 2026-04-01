import { createContext, useContext, useState } from "react";
import type { userProps } from "../types/user";

type UserContextType = {
  user: userProps | null;
  repos: Repo[];
  setRepos: React.Dispatch<React.SetStateAction<Repo[]>>; 
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

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userProps | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    const reposRes = await fetch(
      `https://api.github.com/users/${userName}/repos?per_page=10&page=1&sort=updated`,
    );
    const reposData = await reposRes.json();
    setRepos(reposData);

    setUser({
      avatar_url: data.avatar_url,
      login: data.login,
      name: data.name,
      bio: data.bio,
      location: data.location,
      followers: data.followers,
      following: data.following,
      company: data.company,
      email: data.email,
      twitterUserName: data.twitter_username,
      siteAdmin: data.site_admin,
    });
  };

  return (
    <UserContext.Provider value={{ user, repos, setRepos, loadUser }}>
      {" "}
      {}
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
