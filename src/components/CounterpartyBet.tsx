import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react";
import stepsIcon from "../assets/shoe-prints-solid.svg";
import coinIcon from "../assets/coins-solid.svg";

export type CounterpartyBetProps = {
  name: string;
  commitment: number;
  bet: number;
};

export default function CounterpartyBet({
  name,
  commitment,
  bet,
}: CounterpartyBetProps) {
  return (
    <Box
      px={4}
      py={4}
      mb={4}
      borderBottom="2px"
      borderStyle="solid"
      borderColor="#02A9A4"
    >
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontSize="24px"
          fontWeight={700}
        >
          {name}.mezo
        </Text>
        <VStack>
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
        </VStack>
      </Flex>
    </Box>
  );
}
