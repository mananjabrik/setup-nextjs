import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export interface CardProps {
  tittle: string;
  img: string;
  color?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <Box width="100%">
      <Box
        bgGradient={props.color}
        p="1rem"
        color="white"
        textAlign="center"
        height="15rem"
        borderRadius="1rem"
      >
        <Text fontSize="4xl">{props.tittle}</Text>
        <Box display="flex" justifyContent="center" mt="1rem">
          <Image src={props.img} />
        </Box>
      </Box>
    </Box>
  );
};
Card.defaultProps = {
  color: "linear(to-r, #f95b5b, #d53f62)",
};
