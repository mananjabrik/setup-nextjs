import { Box, Container, Wrap, WrapItem } from "@chakra-ui/react";
import { Card } from "../components/molecules";

export default function Home() {
  const pink = "linear(to-r, #f95b5b, #d53f62)";
  const teal = "linear(to-r, #2f9f9a, #2fa57f)";
  const blue = "linear(to-r, #5986eb, #0066ce)";
  return (
    <Box>
      <Container>
        <Wrap spacing="none">
          <WrapItem width="50%" p="2px">
            <Card
              tittle="Main Bola"
              img="https://img.icons8.com/doodle/96/000000/football2--v1.png"
              color={teal}
            />
          </WrapItem>
          <WrapItem width="50%" p="2px">
            <Card
              tittle="Main Basket"
              img="https://img.icons8.com/doodle/96/000000/basketball--v1.png"
              color={pink}
            />
          </WrapItem>
          <WrapItem width="50%" p="2px">
            <Card
              tittle="Ping Pong"
              img="https://img.icons8.com/doodle/96/000000/ping-pong.png"
              color={blue}
            />
          </WrapItem>
        </Wrap>
      </Container>
    </Box>
  );
}
