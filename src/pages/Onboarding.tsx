import { Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import mezoLogo from "../assets/mezo-logo-inline.svg";
import strideLogo from "../assets/stride-logo.png";
import { useNavigate } from "@tanstack/react-router";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <VStack gap={20}>
      <VStack gap={4}>
        <Image
          src={strideLogo}
          h="72px"
        />
        <Flex
          alignItems="center"
          gap={3}
        >
          <Text>powered by</Text>
          <Image src={mezoLogo} />
        </Flex>
      </VStack>
      <Heading
        textAlign="center"
        fontSize="72px"
      >
        Connect to Mezo and commit
      </Heading>
      <Button
        bg="#02A9A4"
        color="white"
        _hover={{ bg: "#03D4AC" }}
        fontSize="28px"
        height="48px"
        px={10}
        onClick={() => navigate({ to: "/login" })}
      >
        Connect
      </Button>
    </VStack>
  );
}
