import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { theme } from "../themes/Themes";
import star from "../assets/star.png";
import { BsDot } from "react-icons/bs";

const UserRepositorys = () => {
  return (
    <>
      <Center>
        <Box px={5} pt={5} borderBottom="1px" pb={5} borderColor={theme.colors.brand.borderColor}>
          <Text>
            <Text color="#000000" fontWeight="700" fontSize="20px">
              Repositório nome
            </Text>
            <Text color={theme.colors.brand.colorInfoUser}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              impedit sequi. Nisi impedit ea at minus cum explicabo velit
              aperiam reprehenderit delectus reiciendis, quos, dolor officia
              consequuntur hic dolorem tempore.
            </Text>
          </Text>
          <Flex align="center" pt={3} gap={2}>
            <Image src={star} />

            <Text as="span">Number os likes</Text>
            <BsDot />
            <Text>Time atualization</Text>
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default UserRepositorys;
