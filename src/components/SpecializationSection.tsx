import { Container, Title, Text, Box } from "@mantine/core";
import classes from "./SpecializationSection.module.css";

export function SpecializationSection() {
  return (
    <div className={classes.root}>
      <Container size="full">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              WE ARE{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                SPECIALIZED
              </Text>{" "}
              IN CREATING ENGAGING DIGITAL EXPERIENCES THAT WILL{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                ATTRACT
              </Text>{" "}
              AND RETAIN YOUR CLIENT.
            </Title>

            <Box className={classes.descriptionBox}>
              <Text className={classes.description} mt={30}>
                With a focus on user-centered design and intuitive interactions, we aim to create unforgettable experiences that set your brand apart.
              </Text>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
}
