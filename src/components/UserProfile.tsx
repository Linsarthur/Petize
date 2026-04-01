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
import userImage from "../assets/avatar.png";
import followers from "../assets/group.png";
import likes from "../assets/heart.png";
import company from "../assets/building.png";
import location from "../assets/pin.png";
import email from "../assets/mail.png";
import link from "../assets/link.png";
import twitter from "../assets/twitter.png";
import { theme } from "../themes/Themes";
import { useState } from "react";
import UserStats from "./UserStats";

const UserProfile = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <>
      <Container color={theme.colors.brand.colorInfoUser}>
        <Box>
          <Flex gap={4}>
            <Image src={userImage} />
            <Box>
              <Text fontSize="20px" fontWeight="700" color={"black"}>
                Users Name
              </Text>
              <Text
                as="span"
                fontSize="14px"
                color={theme.colors.brand.grey}
                fontWeight="400"
                letterSpacing="0"
              >
                @usersNickname
              </Text>
            </Box>
          </Flex>
        </Box>
        <Collapse startingHeight={45} in={show}>
          <Box>
            Desenvolvedor Full Stack - React | Node | Html | Css | JavaScript |
            Firebase | MySQL | Express | Nest.js
          </Box>

          <Box pt={5}>
            <UserStats text="240 Number of followers" image={followers} />
            <UserStats text="240 Number of likes" image={likes} />
            <UserStats text="Company that works" image={company} />
            <UserStats text="City" image={location} />
            <UserStats text="Email@email.com" image={email} />
            <UserStats text="Link for own page" image={link} />
            <UserStats text="Link Twitter" image={twitter} />
          </Box>
          <Center pt={5} pb={5}>
            <Button bgColor={theme.colors.brand.secondary} color="#FFFFFF">
              Contato
            </Button>
          </Center>
        </Collapse>
        <Button
          mt={5}
          mb={5}
          size="sm"
          onClick={handleToggle}
          bgColor={theme.colors.brand.secondary}
          _hover={{ bgColor: theme.colors.brand.primary }}
          color="white"
        >
          {" "}
          Mostrar {show ? "Menos" : "Mais"}
        </Button>
      </Container>
    </>
  );
};

export default UserProfile;
