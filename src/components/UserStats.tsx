import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface UserStatsProps {
  text: string;
  image: string;
}

const UserStats = ({ text, image }: UserStatsProps) => {
  return (
    <>
      <Flex align="center" py={3} gap={2}>
        <Image src={image} flexShrink={0} />
        <Box>
          <Text fontSize={{ base: "sm", md: "md" }} wordBreak="break-word">{text}</Text>
        </Box>
      </Flex>
    </>
  );
};

export default UserStats;
