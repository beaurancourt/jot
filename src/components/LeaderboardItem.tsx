import { Flex, Text, Image } from "@chakra-ui/react";
import fireIcon from "../assets/fire-solid.svg";

export type LeaderboardItemProps = {
  name: string;
  streak: number;
  points: number;
};

export default function LeaderboardItem({
  name,
  streak,
  points,
  place,
}: LeaderboardItemProps & { place: number }) {
  return (
    <Flex
      w="100%"
      mb={2}
      p={2}
      bg="#02A9A4"
      color="white"
      rounded="4px"
    >
      <Text w="10%">{place}</Text>
      <Text
        w="40%"
        fontWeight={500}
      >
        {name}.mezo
      </Text>
      <Flex
        w="10%"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Text>{streak}</Text>
        <Image
          src={fireIcon}
          w="16px"
          h="16px"
          objectFit="contain"
          filter="invert(1)"
        />
      </Flex>
      <Text
        w="40%"
        textAlign="right"
      >
        {points.toLocaleString("en-US")}
      </Text>
    </Flex>
  );
}
