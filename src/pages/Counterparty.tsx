import { Heading } from "@chakra-ui/react";
import { AVAILABLE_BETS } from "../constants";
import AvailableBets from "../components/AvailableBets";

export default function Counterparty() {
  return (
    <>
      <Heading mb={5}>Available bets</Heading>
      {AVAILABLE_BETS.map(({ name, commitment, bet, streak }) => (
        <AvailableBets
          name={name}
          commitment={commitment}
          bet={bet}
          streak={streak}
        />
      ))}
    </>
  );
}
