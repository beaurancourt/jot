import { createLazyFileRoute } from "@tanstack/react-router";
import Leaderboard from "../pages/Leaderboard";

export const Route = createLazyFileRoute("/leaderboard")({
  component: () => <Leaderboard />,
});
