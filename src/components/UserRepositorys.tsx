type RepoProps = {
  name: string;
  description: string;
  stars: number;
  updatedAt: string;
  url: string;
};

import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { theme } from "../themes/Themes";
import star from "../assets/star.png";
import { BsDot } from "react-icons/bs";

const UserRepositorys = ({
  name,
  description,
  stars,
  updatedAt,
  url,
}: RepoProps) => {
  const date = new Date(updatedAt).toLocaleDateString("pt-BR");

  return (
    <Center>
      <Box
        px={5}
        pt={5}
        borderBottom="1px"
        pb={5}
        borderColor={theme.colors.brand.borderColor}
      >
        <Text>
          <Text
            as="a"
            href={url}
            target="_blank"
            color="#000000"
            fontWeight="700"
            fontSize="20px"
          >
            {name}
          </Text>
          <Text color={theme.colors.brand.colorInfoUser}>
            {description || "Sem descrição"}
          </Text>
        </Text>
        <Flex align="center" pt={3} gap={2}>
          <Image src={star} />
          <Text as="span">{stars}</Text>
          <BsDot />
          <Text>Atualizado em {date}</Text>
        </Flex>
      </Box>
    </Center>
  );
};

export default UserRepositorys;