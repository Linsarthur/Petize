import {
  Box,
  Button,
  Center,
  Collapse,
  Container,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import userFollowers from "../assets/group.png";
import userFollowing from "../assets/heart.png";
import userCompany from "../assets/building.png";
import userLocation from "../assets/pin.png";
import userEmail from "../assets/mail.png";
import userLink from "../assets/link.png";
import userTwitter from "../assets/twitter.png";
import { theme } from "../themes/Themes";
import { useEffect, useState } from "react";
import UserStats from "./UserStats";
import { useUser } from "../context/UserContext";
import { useParams } from "react-router";
import { useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const UserProfile = () => {
  const { t } = useTranslation();
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { username } = useParams();
  const { loadUser } = useUser();
  const { user } = useUser();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  useEffect(() => {
    const user = loadUser("user");
    if (username) loadUser(username);
  }, [username]);

  if (!user) return null;
  const {
    name,
    bio,
    login,
    avatar_url,
    followers,
    following,
    location,
    company,
    siteAdmin,
    twitterUserName,
    email,
    blog,
  } = user;

  return (
    <>
      <Container color={theme.colors.brand.colorInfoUser}>
        <Box>
          <Flex gap={2} align="center">
            <Image
              src={avatar_url}
              alt={login}
              w={{ base: "40%", md: "40%", lg: "60%", xl: "50%" }}
              rounded="full"
            />
            <Box>
              <Text fontSize="20px" fontWeight="700" color="black">
                {name}
              </Text>
              <Text
                as="span"
                fontSize="14px"
                color={theme.colors.brand.grey}
                fontWeight="400"
                letterSpacing="0"
              >
                @{login}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Collapse startingHeight={45} in={isDesktop || show}>
          <Box pt={4}>{bio}</Box>

          <Box pt={5}>
            <UserStats
              text={`${followers} ${t("followers")}`}
              image={userFollowers}
            />{" "}
            <UserStats
              text={`${following} ${t("following")}`}
              image={userFollowing}
            />{" "}
            {company && <UserStats text={company} image={userCompany} />}
            {location && <UserStats text={location} image={userLocation} />}
            {email && <UserStats text={email} image={userEmail} />}
            {siteAdmin && <UserStats text={siteAdmin} image={userLink} />}
            {twitterUserName && (
              <UserStats text={twitterUserName} image={userTwitter} />
            )}
            <Center pt={5} pb={5} gap={3}>
              {blog && (
                <Button
                  as="a"
                  href={blog.startsWith("http") ? blog : `https://${blog}`}
                  target="_blank"
                  bgColor={theme.colors.brand.secondary}
                  color="#FFFFFF"
                  _hover={{ bgColor: theme.colors.brand.primary }}
                >
                  {t("site")}
                </Button>
              )}
              {twitterUserName && (
                <Button
                  as="a"
                  href={`https://twitter.com/${twitterUserName}`}
                  target="_blank"
                  bgColor={theme.colors.brand.secondary}
                  color="#FFFFFF"
                  _hover={{ bgColor: theme.colors.brand.primary }}
                >
                  {t("twitter")}
                </Button>
              )}
            </Center>
          </Box>
        </Collapse>
        {!isDesktop && (
          <Button
            mt={5}
            mb={5}
            size="sm"
            onClick={handleToggle}
            bgColor={theme.colors.brand.secondary}
            _hover={{ bgColor: theme.colors.brand.primary }}
            _active={{ bgColor: theme.colors.brand.secondary }}
            color="white"
          >
            {show ? t("showLess") : t("showMore")}
          </Button>
        )}
      </Container>
    </>
  );
};

export default UserProfile;
