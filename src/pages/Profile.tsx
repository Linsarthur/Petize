import Navbar from "../components/Navbar";
import UserPosts from "../components/UserPosts";
import UserProfile from "../components/UserProfile";
import { Flex, Box } from "@chakra-ui/react";

const Profile = () => {
  return (
     <>
      <Navbar />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        pl={{ base: 0, md: "30" }}
        pr={{ base: 0, md: "60" }}
        pt={5}
      >
        <Box
          w={{ base: "100%", md: "300px" }}
          flexShrink={0} // ✅ impede o perfil de encolher
        >
          <UserProfile />
        </Box>

        <Box flex={1} w="100%"> 
          <UserPosts />
        </Box>
      </Flex>
    </>
  );
};

export default Profile;
