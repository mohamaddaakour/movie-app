import axios from "axios";
import type { Show } from "../types/show";

// Create axios instance
const tvmaze = axios.create({
  baseURL: "https://api.tvmaze.com",
  timeout: 10_000
});

export async function getShows(
  page = 0,
  signal?: AbortSignal,
): Promise<Show[]> {
  const { data } = await tvmaze.get<Show[]>("/shows", {
    params: { page },
    signal,
  });

  return data;
}
