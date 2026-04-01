import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState, useRef, useCallback } from "react";
import { useUser } from "../context/UserContext";
import UserRepositorys from "./UserRepositorys";
import RepoFilters from "./RepoFilters";
import { RepoListSchema } from "../schemas/github";

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
};

const UserPosts = () => {
  const { user, repos, setRepos } = useUser();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [sort, setSort] = useState("updated");
  const [direction, setDirection] = useState("desc");
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
    setRepos([]);
    setPage(1);
    setHasMore(true);
  }, [user, sort, direction]);

  useEffect(() => {
    if (!user || !user.login) return;

    const fetchRepos = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.github.com/users/${user.login}/repos?per_page=10&page=1&sort=${sort}&direction=${direction}`,
        { headers },
      );
      const data = await res.json();
      const parsed = RepoListSchema.safeParse(data);

      if (!parsed.success) return;

      if (parsed.data.length === 0) {
        setHasMore(false);
      } else {
        setRepos(
          parsed.data.map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description ?? "",
            stargazers_count: repo.stargazers_count,
            updated_at: repo.updated_at,
            html_url: repo.html_url,
          })),
        );
      }

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setRepos(data);
      }
      setLoading(false);
    };

    fetchRepos();
  }, [user, sort, direction]);

  useEffect(() => {
    if (!user || !user.login || page === 1) return;

    const fetchMore = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.github.com/users/${user.login}/repos?per_page=10&page=${page}&sort=${sort}&direction=${direction}`,
        { headers },
      );
      const data = await res.json();

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setRepos((prev) => [...prev, ...data]);
      }
      setLoading(false);
    };

    fetchMore();
  }, [page]);

  return (
    <Box>
      <RepoFilters
        sort={sort}
        direction={direction}
        onSortChange={(value) => setSort(value)}
        onDirectionChange={(value) => setDirection(value)}
      />

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
