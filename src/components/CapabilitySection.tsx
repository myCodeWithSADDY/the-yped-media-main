import { Container, Title, Text, Button, Box, Group } from "@mantine/core";
import classes from "./CapabilitySection.module.css";
import VerticalText from "./VerticalText";

export function CapabilitySection() {
  return (
    <div className={classes.root}>
      <Container size="full">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              AT OUR STUDIO CREATIVITY TAKES CENTER STAGE DELIVERING SOLUTIONS THAT EXCEED EXPECTATION
            </Title>
          </div>
          <div className={classes.subContent}>
            <Text className={classes.subText}>Our Capabilities</Text>
            <Text className={classes.subText}>
              You have the option to order a full website creation or individual service as needed
            </Text>
          </div>

          <hr style={{ border: "1px solid #fff", marginTop: "5px" }} />

          <div className={classes.listBox}>
            <VerticalText title="Web Design" />

            <div className={classes.list}>
              <h2 className={classes.item}>
                <span>01</span> Web Design
              </h2>
              <h2 className={classes.item}>
                <span>02</span> Mobile Design
              </h2>
              <h2 className={classes.item}>
                <span>03</span> UI/UX
              </h2>
            </div>
          </div>

          <hr style={{ border: "1px solid #fff", marginTop: "5px" }} />
          <div className={classes.listBox}>
            <VerticalText title="Web Development" />

            <div className={classes.list}>
              <h2 className={classes.item}>
                <span>01</span> Web Animation
              </h2>
              <h2 className={classes.item}>
                <span>02</span> Web Development
              </h2>
            </div>
          </div>

          <hr
            style={{
              border: "1px solid #fff",
              marginTop: "5px",
              marginBottom: "100px",
            }}
          />
        </div>
      </Container>
    </div>
  );
}
