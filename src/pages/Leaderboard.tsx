import { Flex, Text } from "@chakra-ui/react";
import { LEADERBOARD } from "../constants";
import LeaderboardItem from "../components/LeaderboardItem";

export default function Leaderboard() {
  return (
    <>
      <Flex
        w="100%"
        mb={2}
        pb={1}
        px={2}
        borderBottomWidth="1px"
        borderBottomColor="#02A9A4"
        borderBottomStyle="solid"
      >
        <Text w="10%">#</Text>
        <Text w="40%">Name</Text>
        <Text
          w="10%"
          textAlign="center"
        >
          Streak
        </Text>
        <Text
          w="40%"
          textAlign="right"
        >
          Earned points
        </Text>
      </Flex>
      {[...LEADERBOARD]
        .sort((a, b) => b.points - a.points)
        .map(({ name, streak, points }, index) => (
          <LeaderboardItem
            place={index + 1}
            name={name}
            streak={streak}
            points={points}
          />
        ))}
    </>
  );
}
