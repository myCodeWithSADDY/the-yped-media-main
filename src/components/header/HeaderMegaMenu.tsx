"use client";
import { Group, Button, Box } from "@mantine/core";
import classes from "./HeaderMegaMenu.module.css";

export function HeaderMegaMenu() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" w="100%">
          <a href="#" className={classes.link}>
            The Typed Media
            {/* The <span style={{ fontFamily: "monospace", }}>Typed Media</span> */}
          </a>

          <Button
            variant="default"
            className={classes.btn}
            onClick={handleScrollToContact}
          >
            Contact
          </Button>
        </Group>
      </header>
    </Box>
  );
}
