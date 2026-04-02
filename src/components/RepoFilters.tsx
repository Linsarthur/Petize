import { Flex, Select, Text } from "@chakra-ui/react";
import { theme } from "../themes/Themes";
import { useTranslation } from "react-i18next";

type FilterProps = {
  sort: string;
  direction: string;
  onSortChange: (value: string) => void;
  onDirectionChange: (value: string) => void;
};

const RepoFilters = ({
  sort,
  direction,
  onSortChange,
  onDirectionChange,
}: FilterProps) => {
  const { t } = useTranslation();

  return (
    <Flex
      gap={4}
      px={5}
      pb={3}
      align="center"
      justify={{ base: "center", md: "center" }}
      flexDirection={{ base: "column", md: "row" }}
      w="100%"
    >
      <Text fontWeight="600">{t("orderBy")}</Text>

      <Select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        w={{ base: "80vw", md: "180px" }}
        focusBorderColor={theme.colors.brand.secondary}
      >
        <option value="updated">{t("updated")}</option>
        <option value="created">{t("created")}</option>
        <option value="pushed">{t("pushed")}</option>
        <option value="full_name">{t("fullName")}</option>
      </Select>

      <Select
        value={direction}
        onChange={(e) => onDirectionChange(e.target.value)}
        w={{ base: "80vw", md: "140px" }}
        focusBorderColor={theme.colors.brand.secondary}
      >
        <option value="desc">{t("descending")}</option>
        <option value="asc">{t("ascending")}</option>
      </Select>
    </Flex>
  );
};

export default RepoFilters;
