import {
  Box,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import userFollowers from "../assets/group.png";
import userFollowing from "../assets/heart.png";
import userCompany from "../assets/building.png";
import userLocation from "../assets/pin.png";
import userEmail from "../assets/mail.png";
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
  const { username } = useParams();
  const { loadUser } = useUser();
  const { user } = useUser();
  const [show, setShow] = useState(false);

  useEffect(() => {
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
    twitterUserName,
    email,
    blog,
  } = user;

 

  return (
   <>
  <Box color={theme.colors.brand.colorInfoUser}>
    <Flex gap={2} align="center">
      <Image
        src={avatar_url}
        alt={login}
        w={{ base: "30%", lg: "40%" }} 
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

    <Box pt={4}>{bio}</Box>

    <Box pt={5}>
      <UserStats text={`${followers} ${t("followers")}`} image={userFollowers} />
      <UserStats text={`${following} ${t("following")}`} image={userFollowing} />
      {company && <UserStats text={company} image={userCompany} />}
      {location && <UserStats text={location} image={userLocation} />}
      {email && <UserStats text={email} image={userEmail} />}
      {twitterUserName && <UserStats text={twitterUserName} image={userTwitter} />}

      <Flex pt={5} pb={5} gap={3} wrap="wrap">
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
      </Flex>
    </Box>

    {email && (
      <Button
        as="a"
        href={`mailto:${email}`}
        w="100%"
        bgColor={theme.colors.brand.secondary}
        color="white"
        _hover={{ bgColor: theme.colors.brand.primary }}
        mb={5}
      >
        {t("contact")}
      </Button>
    )}
  </Box>
</>
  );
};

export default UserProfile;
