import { Box, Flex, Text, Image, VStack, Button } from "@chakra-ui/react";
import stepsIcon from "../assets/shoe-prints-solid.svg";
import coinIcon from "../assets/coins-solid.svg";
import { CounterpartyBetProps } from "./CounterpartyBet";

type AvailableBetProps = CounterpartyBetProps & { streak: (boolean | null)[] };

export default function AvailableBets({
  name,
  commitment,
  bet,
  streak,
}: AvailableBetProps) {
  return (
    <Box
      px={4}
      py={4}
      mb={4}
      borderBottom="2px"
      borderStyle="solid"
      borderColor="red"
    >
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack
          alignItems="flex-start"
          gap={3}
        >
          <Text
            fontSize="24px"
            fontWeight={700}
          >
            {name}.mezo
          </Text>
          <Flex gap={4}>
            {commitment > 0 && (
              <Flex gap={2}>
                <Text>{commitment.toLocaleString("en-US")}</Text>
                <Image
                  src={stepsIcon}
                  w="24px"
                  h="24px"
                  objectFit="contain"
                />
              </Flex>
            )}
            <Flex gap={2}>
              <Text>{bet.toLocaleString("en-US")}</Text>
              <Image
                src={coinIcon}
                w="24px"
                h="24px"
                objectFit="contain"
              />
            </Flex>
          </Flex>
        </VStack>
        <VStack alignItems="flex-end">
          <Button
            colorScheme="red"
            fontSize="16px"
            height="32px"
            px={4}
            w="100%"
          >
            Bet
          </Button>
          <Flex
            gap={2}
            alignItems="center"
          >
            <Text fontSize="14px">Streak:</Text>
            <Flex gap={1}>
              {streak.map((value) => (
                <Box
                  h="8px"
                  w="8px"
                  rounded="100%"
                  bg={value ? "green" : "red"}
                />
              ))}
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}
