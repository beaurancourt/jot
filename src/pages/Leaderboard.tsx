import { Flex, Text } from "@chakra-ui/react";

export default function Leaderboard() {
  return (
    <>
      <Flex
        w="100%"
        mb={2}
        pb={1}
        px={2}
        borderBottomWidth="1px"
        borderBottomColor="red"
        borderBottomStyle="solid"
      >
        <Text w="50%">Name</Text>
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
    </>
  );
}
