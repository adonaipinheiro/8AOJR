import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getPopularMovies } from "../../../services";
import { useCallback, useEffect } from "react";

export function useHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const queryClient = useQueryClient();
  const page = parseInt(queryParams.get("page") || "1");

  const { data, isLoading, error } = useQuery({
    queryKey: ["getPopularMovies", page],
    queryFn: () => getPopularMovies({ page }),
  });

  const prefetchNextPage = useCallback(() => {
    queryClient.prefetchQuery({
      queryKey: ["getPopularMovies", page + 1],
      queryFn: () => getPopularMovies({ page: page + 1 }),
    });
  }, [page, queryClient]);

  function handleNavigateTo(page = 1) {
    navigate(`/movies?page=${page}`);
  }

  function handleLogoff() {
    navigate("/signin", { replace: true });
  }

  useEffect(() => {
    prefetchNextPage();
    scrollTo({ top: 0, behavior: "smooth" });
  }, [prefetchNextPage]);

  return {
    data,
    isLoading,
    error,
    handleNavigateTo,
    handleLogoff,
    page
  }
}
