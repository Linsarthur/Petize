import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { theme } from "../themes/Themes";
import search from "../assets/Vector.png";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅
  const { loadUser, error, user } = useUser();
  const [userName, setUsername] = useState("");

  const handleSearch = async () => {
    await loadUser(userName);
  };

  return (
    <>
      <Center flexDirection="column">
        <Flex
          pl={5}
          pr={5}
          pt="30px"
          mb="50px"
          gap={5}
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text fontSize={{ sm: "2xl" }} fontWeight="500">
              <Text as="span" color={theme.colors.brand.primary}>
                Search{" "}
              </Text>
              <Text as="span" color={theme.colors.brand.secondary}>
                d_evs
              </Text>
            </Text>
          </Box>

          <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            gap={3}
          >
            <Box>
              <Input
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                w={{ base: "80vw", md: "30vw", lg: "35vw", xl: "25vw" }}
                bgImg={search}
                bgRepeat="no-repeat"
                bgPosition="12px center"
                px={10}
                placeholder="Github Profile"
                focusBorderColor={theme.colors.brand.secondary}
              />
            </Box>

            <Button
              onClick={handleSearch}
              size="md"
              w={{ base: "80vw", md: "100px" }}
              bgColor={theme.colors.brand.secondary}
              color="white"
              _hover={{ bgColor: theme.colors.brand.primary }}
            >
              Search
            </Button>
          </Flex>
          {error && (
            <Text color="red.500" mt={3} textAlign="center">
              {error}
            </Text>
          )}
        </Flex>
      </Center>
    </>
  );
};

export default Navbar;
