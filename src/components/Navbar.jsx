import {
  Box,
  Center,
  Flex,
  Hide,
  Image,
  Input,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { theme } from "../themes/Themes";
import search from "../assets/Vector.png";
import iconProfile from "../assets/avatar.png";
const Navbar = () => {
  return (
    <>
      <Center>
        <Flex pl={5} pr={5} pt="30px" mb="50px" gap={10}>
          <Box>
            <Text fontSize={{ sm: "2xl" }} fontWeight="500">
              <Show above="md">
                <Text as="span" color={theme.colors.brand.primary}>
                  Search{" "}
                </Text>
                <Text as="span" color={theme.colors.brand.secondary}>
                  d_evs
                </Text>
              </Show>
            </Text>
          </Box>
          <Box>
            <Show below="md">
              <Image src={iconProfile} alt="user profile" w="10vw" />
            </Show>
          </Box>

          <Box>
            <Input
              w={{ sm: "50vw", md: "50vw", lg: "40vw", xl: "25vw" }}
              bgImg={search}
              bgRepeat="no-repeat"
              bgPosition="12px center"
              px={10}
              placeholder="Github Profile"
              focusBorderColor={theme.colors.brand.secondary}
            />
          </Box>
        </Flex>
      </Center>
    </>
  );
};

export default Navbar;
