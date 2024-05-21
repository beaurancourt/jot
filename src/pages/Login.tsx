import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { POINTS } from "../constants";
import { useLocalStorage } from "usehooks-ts";

export default function Login() {
  const [formCompleted, setFormCompleted] = useState(false);
  const [appConnected, setAppConnected] = useState(false);
  const [trackingApp, setTrackingApp] = useState<number | null>(null);

  const [commitment, setCommitment] = useState("");
  const [bet, setBet] = useState("");

  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocalStorage] = useLocalStorage("store", "");

  const submitForm = useCallback(() => {
    setFormCompleted(true);
    setLocalStorage(JSON.stringify({ commitment, bet }));
  }, [bet, commitment, setLocalStorage]);

  if (formCompleted && appConnected) {
    return (
      <VStack gap={10}>
        <Heading>Stay committed!</Heading>
        <Text fontSize="24px">
          <strong>Commitment:</strong>{" "}
          {Number(commitment).toLocaleString("en-US")} steps
        </Text>
        <Text fontSize="24px">
          <strong>Bet:</strong> {Number(bet).toLocaleString("en-US")} points
        </Text>
        <Button
          colorScheme="red"
          fontSize="20px"
          height="48px"
          px={4}
          w="100%"
          onClick={() => navigate({ to: "/dashboard" })}
        >
          Go to dashboard
        </Button>
      </VStack>
    );
  }

  return (
    <>
      <Flex
        mb={10}
        w="100%"
        justifyContent="space-between"
        fontSize="32px"
      >
        <Text>thesis.mezo</Text>
        <Text fontWeight={700}>{POINTS.toLocaleString("en-US")} points</Text>
      </Flex>
      <FormControl>
        <FormLabel>Commitment (number of steps)</FormLabel>
        <Input
          type="number"
          mb={10}
          fontSize="24px"
          px={4}
          height="48px"
          onChange={(e) => setCommitment(e.target.value)}
        />
        <FormLabel>Your bet</FormLabel>
        <Input
          type="number"
          mb={10}
          fontSize="24px"
          px={4}
          height="48px"
          onChange={(e) => setBet(e.target.value)}
        />
        <Flex gap={5}>
          <Button
            colorScheme="red"
            fontSize="20px"
            isDisabled={appConnected}
            height="48px"
            px={4}
            w="100%"
            onClick={onOpen}
          >
            {appConnected ? "Connected" : "Connect tracking app"}
          </Button>
          <Button
            colorScheme="red"
            isDisabled={!appConnected || !commitment || !bet}
            fontSize="20px"
            height="48px"
            px={4}
            w="100%"
            onClick={submitForm}
          >
            Place your bet
          </Button>
        </Flex>
      </FormControl>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick
      >
        <ModalOverlay />
        <ModalContent
          bg="white"
          py={5}
          px={2}
        >
          <Heading
            textAlign="center"
            mb={5}
          >
            Connect your app
          </Heading>
          <VStack
            gap={2}
            w="100%"
            mb={10}
          >
            <Button
              w="100%"
              bg={trackingApp === 1 ? "red" : "lightgray"}
              onClick={() => setTrackingApp(1)}
            >
              Fitbit
            </Button>
            <Button
              w="100%"
              bg={trackingApp === 2 ? "red" : "lightgray"}
              onClick={() => setTrackingApp(2)}
            >
              Sweat
            </Button>
            <Button
              w="100%"
              bg={trackingApp === 3 ? "red" : "lightgray"}
              onClick={() => setTrackingApp(3)}
            >
              7 Minute Workout
            </Button>
          </VStack>
          <Button
            colorScheme="red"
            fontSize="20px"
            isDisabled={!trackingApp}
            height="48px"
            px={4}
            w="100%"
            onClick={() => {
              setAppConnected(true);
              onClose();
            }}
          >
            Confirm
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
}
