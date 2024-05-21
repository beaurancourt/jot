import { Container } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Container py={10}>
        <Outlet />
      </Container>
    </>
  );
}
