import { Flex, Select, Text } from "@chakra-ui/react";
import { theme } from "../themes/Themes";

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
  return (
    <Flex gap={4} px={5} py={3} align="center" justify={"end"}>
      <Text fontWeight="600">Ordenar por:</Text>

      <Select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        w="180px"
        focusBorderColor={theme.colors.brand.secondary}
      >
        <option value="updated">Atualização</option>
        <option value="created">Criação</option>
        <option value="pushed">Último push</option>
        <option value="full_name">Nome</option>
      </Select>

      <Select
        value={direction}
        onChange={(e) => onDirectionChange(e.target.value)}
        w="140px"
        focusBorderColor={theme.colors.brand.secondary}
      >
        <option value="desc">Decrescente</option>
        <option value="asc">Crescente</option>
      </Select>
    </Flex>
  );
};

export default RepoFilters;
