"use client";

import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  rem,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import { hasLength, isEmail, useForm } from "@mantine/form";
import { IconX, IconCheck } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import classes from "./GetInTouch.module.css";
import "@mantine/notifications/styles.css";

export function GetInTouch() {
  const form = useForm({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
      email: isEmail("Invalid email"),
      subject: hasLength(
        { min: 2, max: 10 },
        "Subject must be 2-10 characters long",
      ),
      message: hasLength(
        { min: 2, max: 10 },
        "Message must be 2-10 characters long",
      ),
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    formData.append(
      "access_key",
      `${process.env.NEXT_PUBLIC_WEB3_FROM_ACCESS_KEY}`,
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        console.log(result);
        notifications.show({
          title: "Message Sent",
          message: "Your message has been successfully sent.",
          color: "green",
          icon: <IconCheck style={{ width: rem(20), height: rem(20) }} />,
        });
        form.reset();
      } else {
        console.error("Error: ", result);
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      notifications.show({
        title: "Error",
        message: "There was an error sending your message.",
        color: "red",
        icon: <IconX style={{ width: rem(20), height: rem(20) }} />,
      });
    }
  };

  return (
    <Paper shadow="md" radius="lg" className={classes.contactBox} id="contact">
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text fz={30} fw={700} className={classes.title} c="#fff">
            Contact Us
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Text fz={22} fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                label="Your name"
                placeholder="Your name"
                name="name"
                key={form.key("name")}
                {...form.getInputProps("name")}
              />
              <TextInput
                label="Your email"
                placeholder="hello@gmail.com"
                name="email"
                key={form.key("email")}
                {...form.getInputProps("email")}
                required
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Subject"
              placeholder="Subject"
              name="subject"
              key={form.key("subject")}
              {...form.getInputProps("subject")}
              required
            />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              name="message"
              key={form.key("message")}
              {...form.getInputProps("message")}
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
