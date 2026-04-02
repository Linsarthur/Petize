import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { theme } from "../themes/Themes";
import search from "../assets/Vector.png";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Navbar = () => {
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

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
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
            <Input
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              w={{ base: "80vw", md: "30vw", lg: "35vw", xl: "25vw" }}
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
              w={{ base: "80vw", md: "100px" }}
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
        </Flex>

        <Flex gap={2} mb={4}>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => changeLanguage("pt")}
            fontWeight={i18n.language === "pt" ? "bold" : "normal"}
          >
            PT
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => changeLanguage("en")}
            fontWeight={i18n.language === "en" ? "bold" : "normal"}
          >
            EN
          </Button>
        </Flex>
      </Center>
    </>
  );
};

export default Navbar;
