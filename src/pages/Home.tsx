import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { theme } from "../themes/Themes";
import search from "../assets/Vector.png";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { loadUser, error, user } = useUser();
  const [userName, setUsername] = useState("");

  const handleSearch = async () => {
    await loadUser(userName);
  };
  useEffect(() => {
    if (user) navigate(`/profile/${user.login}`);
  }, [user]);

  return (
    <>
      <Center>
        <Flex justify="center" align="center" pt="80" direction="column">
          <Box>
            <Text fontSize="50px" mb="14px">
              <Text as="span" color={theme.colors.brand.primary}>
                Search{" "}
              </Text>
              <Text as="span" color={theme.colors.brand.secondary}>
                d_evs
              </Text>
            </Text>
          </Box>

          <Box>
            <Flex
              gap="5"
              mx={5}
              flexDirection={{ base: "column", md: "row" }}
              align="center"
            >
              {" "}
              
              <Input
                onChange={(e) => setUsername(e.target.value)}
                w={{
                  base: "80vw",
                  sm: "60vw",
                  md: "50vw",
                  lg: "40vw",
                  xl: "25vw",
                }}
                bgImg={search}
                bgRepeat="no-repeat"
                bgPosition="12px center"
                px={10}
                placeholder={t("placeholder")}
                focusBorderColor={theme.colors.brand.secondary}
              />
              <Button
                onClick={handleSearch}
                size="md"
                w={{ base: "80vw", md: "150px" }}
                bgColor={theme.colors.brand.secondary}
                color="white"
                _hover={{ bgColor: theme.colors.brand.primary }}
              >
                {t("search")}
              </Button>
            </Flex>
            {error && (
              <Text color="red.500" mt={3} textAlign="center">
                {t(error)} 
              </Text>
            )}
          </Box>
        </Flex>
      </Center>
    </>
  );
};

export default Home;
