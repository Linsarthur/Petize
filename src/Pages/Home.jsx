import { Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { theme } from "../Themes/Themes";
import lupa from "../assets/Vector.png";
const Home = () => {
  return (
    <>
      <Center>
        <Flex justify="center" align="center" pt="80" direction="column">
          <div>
            <Text fontSize="50px" mb="14px">
              <Text as="span" color={theme.colors.brand.primary}>
                Search{" "}
              </Text>
              <Text as="span" color={theme.colors.brand.secondary}>
                d_evs
              </Text>
            </Text>
          </div>

          <div>
            <Flex gap="5" mx={5}>
              <Input
                bgImg={lupa}
                bgRepeat="no-repeat"
                bgPosition="12px center"
                px={10}
                placeholder="Github Profile"
              />
              <Button size="md" w="150px" bgColor={theme.colors.brand.secondary} color="white">
                {" "}
                Search{" "}
              </Button>
            </Flex>
          </div>
        </Flex>
      </Center>
    </>
  );
};

export default Home;
