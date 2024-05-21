import { Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import mezoLogo from "../assets/mezo-logo-inline.svg";
import { useNavigate } from "@tanstack/react-router";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <VStack gap={20}>
      <VStack gap={3}>
        <Text>App name</Text>
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
        colorScheme="red"
        fontSize="36px"
        height="56px"
        px={10}
        onClick={() => navigate({ to: "/login" })}
      >
        Connect
      </Button>
    </VStack>
  );
}
