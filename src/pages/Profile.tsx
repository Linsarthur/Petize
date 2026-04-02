import Navbar from "../components/Navbar";
import UserPosts from "../components/UserPosts";
import UserProfile from "../components/UserProfile";
import { Flex, Box } from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "flex-start" }}
        px={{ base: 4, md: 10, lg: 20 }}
        pt={5}
        justify="center"
        gap={10}
      >
        <Box
          w={{ base: "100%", md: "70vw", lg: "300px" }}
          flexShrink={0}
        >
          <UserProfile />
        </Box>

        <Box flex={1} w={{ base: "100%", md: "70vw" }}>
          <UserPosts />
        </Box>
      </Flex>
    </>
  );
};

export default Profile;
