import { createContext, useContext, useState } from "react";
import type { userProps } from "../types/user";

type UserContextType = {
  user: userProps | null;
  loadUser: (userName: string) => Promise<void>;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

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
    <UserContext.Provider value={{ user, loadUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook customizado para facilitar o uso
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
