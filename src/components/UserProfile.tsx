import { Box, Image, Text } from "@chakra-ui/react";
import userImage from "../assets/avatar.png";
import followers from "../assets/group.png";
import likes from "../assets/heart.png";
import company from "../assets/building.png";
import location from "../assets/pin.png";
import email from "../assets/mail.png";
import link from "../assets/link.png";
import twitter from "../assets/twitter.png";

const UserProfile = () => {
  return (
    <>
      <Box>
        <Image src={userImage} />
        <Text>Nome do usuários</Text>
        <Text as="span">@nickDoUsuario</Text>
      </Box>

      <Box color="red">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nostrum
        porro perspiciatis laborum eveniet adipisci aliquam corrupti optio
        assumenda quis dolore atque hic laboriosam ut totam quaerat, molestiae
        deleniti dolorum.
      </Box>
      <Box>
        <Image src={followers} />
        <Text>240 number followers</Text>
      </Box>
      <Box>
        <Image src={likes} />
        <Text>240 number followers</Text>
      </Box>
      <Box>
        <Image src={company} />
        <Text>240 number followers</Text>
      </Box>
      <Box>
        <Image src={location} />
        <Text>240 number followers</Text>
      </Box>
      <Box>
        <Image src={email} />
        <Text>240 number followers</Text>
      </Box>
      <Box>
        <Image src={link} />
        <Text>240 number followers</Text>
      </Box>
      <Box>
        <Image src={twitter} />
        <Text>240 number followers</Text>
      </Box>
    </>
  );
};

export default UserProfile;
