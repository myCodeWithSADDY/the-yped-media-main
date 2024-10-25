import { Container, Title, Text, Box, Group } from "@mantine/core";
import classes from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <div className={classes.root}>
      <Container size="full">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              WE ARE A{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                BRAND OF CREATIVITY
              </Text>{" "}
              THAT CREATES THE UNEXPECTED
            </Title>

            <Box className={classes.descriptionBox}>
              <Text className={classes.description} mt={30}>
                We’re focused on bringing unseen digital ideas to life for our clients. With our loads of skill sets to solve your needs.
              </Text>
            </Box>

            <Group
              justify="space-between"
              w="100%"
              className={classes.adjectives}
            >
              <Text className={classes.text}>Design Driven</Text>
              <Text className={classes.text}>Creative</Text>
              <Text className={classes.text}> World Wide</Text>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
