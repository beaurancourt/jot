import { Flex } from "@chakra-ui/react";
import { Link, useMatchRoute } from "@tanstack/react-router";

export default function Header() {
  const matchRoute = useMatchRoute();
  const isOnboarding = !!matchRoute({ to: "/" });
  const isLogin = !!matchRoute({ to: "/login" });

  if (isOnboarding || isLogin) return null;

  return (
    <Flex
      w="100%"
      maxW="640px"
      mx="auto"
      gap={5}
      py={2}
    >
      <Link
        to="/dashboard"
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        Dashboard
      </Link>
      <Link
        to="/counterparty"
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        Counterparty
      </Link>
      <Link
        to="/leaderboard"
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        Leaderboard
      </Link>
    </Flex>
  );
}
