import { createFileRoute } from "@tanstack/react-router";
import Counterparty from "../pages/Counterparty";

export const Route = createFileRoute("/counterparty")({
  component: () => <Counterparty />,
});
