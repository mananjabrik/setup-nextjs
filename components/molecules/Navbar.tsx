import React from "react";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box>
      <UnorderedList>
        <ListItem>Home</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Countact</ListItem>
      </UnorderedList>
    </Box>
  );
};
