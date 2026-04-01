import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState, useRef, useCallback } from "react";
import { useUser } from "../context/UserContext";
import UserRepositorys from "./UserRepositorys";


const UserPosts = () => {
  const { user, repos, setRepos } = useUser();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

 
  const lastRepoRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1); // ✅ quando chegar no final, avança a página
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore],
  );

  useEffect(() => {
    if (!user || page === 1) return; // página 1 já foi carregada no contexto

    const fetchMore = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.github.com/users/${user.login}/repos?per_page=10&page=${page}&sort=updated`,
      );
      const data = await res.json();

      if (data.length === 0) {
        setHasMore(false); // ✅ não há mais repositórios
      } else {
        setRepos((prev) => [...prev, ...data]); // ✅ acumula os novos
      }
      setLoading(false);
    };

    fetchMore();
  }, [page]);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [user]);

  return (
    <Box>
      {repos.map((repo, index) => {
        const isLast = index === repos.length - 1;
        return (
          <div key={repo.id} ref={isLast ? lastRepoRef : null}>
            <UserRepositorys
              name={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
              updatedAt={repo.updated_at}
              url={repo.html_url}
            />
          </div>
        );
      })}

      {loading && (
        <Center py={5}>
          <Spinner color="blue.500" />
        </Center>
      )}

      {!hasMore && (
        <Center py={5}>
          <Text color="gray.500">Sem mais repositórios</Text>
        </Center>
      )}
    </Box>
  );
};

export default UserPosts;
