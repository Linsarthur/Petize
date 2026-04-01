import { Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import UserPosts from "../components/UserPosts";
import UserProfile from "../components/UserProfile";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { user } = useUser(); // ✅ acessa de qualquer lugar

  if (!user) return <Text>Nenhum usuário encontrado.</Text>;

  return (
    <>
      <Navbar />
      <UserProfile />
      <UserPosts />
    </>
  );
};

export default Profile;
