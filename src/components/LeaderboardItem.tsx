import { Flex, Text, Image } from "@chakra-ui/react";
import fireIcon from "../assets/fire-solid.svg";

export default function LeaderboardItem() {
  return (
    <Flex
      w="100%"
      mb={2}
      p={2}
      bg="pink"
      rounded="4px"
    >
      <Text
        w="50%"
        fontWeight={500}
      >
        abc.mezo
      </Text>
      <Flex
        w="10%"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Text>8</Text>
        <Image
          src={fireIcon}
          w="16px"
          h="16px"
          objectFit="contain"
        />
      </Flex>
      <Text
        w="40%"
        textAlign="right"
      >
        10,000
      </Text>
    </Flex>
  );
}
