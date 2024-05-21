import { Flex, VStack, Text, Heading } from "@chakra-ui/react";
import { useReadLocalStorage } from "usehooks-ts";
import { BETS_AGAINST, COUNTERPARTY_BETS, POINTS } from "../constants";
import CounterpartyBet from "../components/CounterpartyBet";

export default function Dashboard() {
  const storage = useReadLocalStorage<string>("store");

  const { commitment, bet } = JSON.parse(storage!) as {
    commitment: number;
    bet: number;
  };

  return (
    <>
      <Flex
        w="100%"
        justifyContent="space-between"
        bg="red"
        p={4}
        color="white"
        rounded="16px"
        mb={10}
      >
        <VStack
          alignItems="flex-start"
          textAlign="left"
        >
          <Text
            fontSize="20px"
            fontWeight={700}
          >
            Current commitment
          </Text>
          <Text>
            Steps: <strong>{Number(commitment).toLocaleString("en-US")}</strong>{" "}
            steps
          </Text>
          <Text>
            Bet: <strong>{Number(bet).toLocaleString("en-US")}</strong> points
          </Text>
        </VStack>
        <VStack
          alignItems="flex-end"
          textAlign="right"
        >
          <Text
            fontSize="20px"
            fontWeight={700}
          >
            thesis.mezo
          </Text>
          <Text>
            Available points:{" "}
            <strong>{(POINTS - bet).toLocaleString("en-US")}</strong>
          </Text>
        </VStack>
      </Flex>
      <Heading mb={5}>Your counterparty bets</Heading>
      {COUNTERPARTY_BETS.map(({ name, commitment, bet }) => (
        <CounterpartyBet
          name={name}
          commitment={commitment}
          bet={bet}
        />
      ))}
      <Heading
        mt={20}
        mb={5}
      >
        Bets against you
      </Heading>
      {BETS_AGAINST.map(({ name, bet }) => (
        <CounterpartyBet
          name={name}
          commitment={0}
          bet={bet}
        />
      ))}
    </>
  );
}
