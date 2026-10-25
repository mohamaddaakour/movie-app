import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getShows } from "../lib/tvmaze";

export default function HomePage() {
  const catalog = useQuery({
    queryKey: ["shows", "catalog", 0],
    queryFn: ({ signal }) => getShows(0, signal)
  });

  if (catalog.isPending) {
    return <p>Loading TV shows ...</p>
  }

  if (catalog.isError) {
    let message: string = "Something went wrong. Please try again.";

    if axios
  }
}
