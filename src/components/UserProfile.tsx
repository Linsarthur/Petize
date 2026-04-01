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
import { useSearchParams } from "react-router";

const UserProfile = () => {
  const [searchParams] = useSearchParams();
  const { loadUser } = useUser();
  const { user } = useUser();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

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
  } = user;

  useEffect(() => {
    const user = searchParams.get("user");
    if (user) loadUser(user);
  }, [searchParams]);

  return (
    <>
      <Container color={theme.colors.brand.colorInfoUser}>
        <Box>
          <Flex gap={4} align="center">
            <Image src={avatar_url} alt={login} w="25%" rounded={"full"} />
            <Box>
              <Text fontSize="20px" fontWeight="700" color={"black"}>
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
        <Collapse startingHeight={45} in={show}>
          <Box pt={4}>{bio}</Box>

          <Box pt={5}>
            <UserStats text={followers + " Seguidores"} image={userFollowers} />
            <UserStats text={following + " Seguindo"} image={userFollowing} />
            {company && <UserStats text={company} image={userCompany} />}
            {location && <UserStats text={location} image={userLocation} />}
            {email && <UserStats text={email} image={userEmail} />}
            {siteAdmin && <UserStats text={siteAdmin} image={userLink} />}
            {twitterUserName && (
              <UserStats text={twitterUserName} image={userTwitter} />
            )}
          </Box>
          
        </Collapse>
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
          Mostrar {show ? "Menos" : "Mais"}
        </Button>
      </Container>
    </>
  );
};

export default UserProfile;
