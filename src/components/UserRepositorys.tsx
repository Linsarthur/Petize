type RepoProps = {
  name: string;
  description: string;
  stars: number;
  updatedAt: string;
  url: string;
};

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { theme } from "../themes/Themes";
import star from "../assets/star.png";
import { BsDot } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const UserRepositorys = ({
  name,
  description,
  stars,
  updatedAt,
  url,
}: RepoProps) => {
  const { t, i18n } = useTranslation();
  const date = new Date(updatedAt).toLocaleDateString(
    i18n.language === "pt" ? "pt-BR" : "en-US", // ✅
  );
  return (
    <>
      <Box
        minH={{ base: "auto", md: "100px" }}
        pl={{sm:10, md: "5%"}}
        pt={5}
        borderBottom="1px"
        borderWidth="100%"
        pb={5}
        borderColor={theme.colors.brand.borderColor}
        w={{ base: "90vw", md: "60vw", lg: "50vw", xl: "40vw" }}
      >
        <Text>
          <Text
            as="a"
            href={url}
            target="_blank"
            color="#000000"
            fontWeight="700"
            fontSize="20px"
            noOfLines={1}
            _hover={{
              textDecoration: "underline",
              color: theme.colors.brand.secondary,
            }}
          >
            {name}
          </Text>
          <Text color={theme.colors.brand.colorInfoUser} noOfLines={2}>
            {description || t("noDescription")}
          </Text>
        </Text>
        <Flex align="" pt={3} gap={2}>
          <Image src={star} />
          <Text as="span">{stars}</Text>
          <BsDot />
          <Text>
            {t("updatedAt")} {date}
          </Text>{" "}
        </Flex>
      </Box>
    </>
  );
};

export default UserRepositorys;
