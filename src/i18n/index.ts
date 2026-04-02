import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "en",
  resources: {
    pt: {
      translation: {
        search: "Pesquisar",
        placeholder: "Github Profile",
        followers: "Seguidores",
        following: "Seguindo",
        showMore: "Mostrar Mais",
        showLess: "Mostrar Menos",
        noDescription: "Sem descrição",
        noUser: "Não há usuários com esse nome.",
        parseError: "Erro ao carregar usuário.",
        updatedAt: "Atualizado em",
        noMoreRepos: "Sem mais repositórios",
        orderBy: "Ordenar por:",
        updated: "Atualização",
        created: "Criação",
        pushed: "Último push",
        fullName: "Nome",
        descending: "Decrescente",
        ascending: "Crescente",
        site: "Site",
        twitter: "Twitter",
      },
    },
    en: {
      translation: {
        search: "Search",
        placeholder: "Github Profile",
        followers: "Followers",
        following: "Following",
        showMore: "Show More",
        showLess: "Show Less",
        noDescription: "No description",
        noUser: "No users found with that name.",
        parseError: "Error loading user.",
        updatedAt: "Updated at",
        noMoreRepos: "No more repositories",
        orderBy: "Order by:",
        updated: "Updated",
        created: "Created",
        pushed: "Last push",
        fullName: "Name",
        descending: "Descending",
        ascending: "Ascending",
        site: "Site",
        twitter: "Twitter",
      },
    },
  },
});

export default i18n;