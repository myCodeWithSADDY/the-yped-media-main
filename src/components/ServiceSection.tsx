"use client";

import React, { useEffect, useRef } from "react";
import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Group,
  Center,
  useMantineTheme,
} from "@mantine/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IconCreditCard,
  IconBuildingBank,
  IconRepeat,
  IconReceiptRefund,
  IconReceipt,
  IconReceiptTax,
  IconReport,
  IconCoin,
} from "@tabler/icons-react";
import classes from "./ServiceSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const mockdata = [
  { title: "Portfolio Website", icon: IconCreditCard, color: "violet" },
  { title: "3D Website", icon: IconBuildingBank, color: "indigo" },
  { title: "UI / UX", icon: IconRepeat, color: "blue" },
  { title: "Interactive Website", icon: IconReceiptRefund, color: "green" },
  { title: "Landing pages", icon: IconReceipt, color: "teal" },
  { title: "Agency Website", icon: IconReceiptTax, color: "cyan" },
  { title: "Product Website", icon: IconReport, color: "pink" },
  { title: "Ecommerce", icon: IconCoin, color: "red" },
];

export function ServiceSection() {
  const theme = useMantineTheme();
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const items = mockdata.map((item, index) => (
    <UnstyledButton
      key={item.title}
      className={classes.item}
      style={{ width: "100%" }}
    >
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <item.icon
          color={theme.colors[item.color][6]}
          className={classes.icon}
          size="4rem"
        />
        <Text size="2xs" mt={7} className={classes.text}>
          {item.title}
        </Text>
      </div>
    </UnstyledButton>
  ));

  useEffect(() => {
    itemsRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            scale: 1.1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });
  }, []);

  return (
    <Center style={{ minHeight: "100vh" }}>
      <Card
        withBorder
        className={classes.card}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Group mb={50}>
          <Text className={classes.title} style={{ position: "sticky" }}>
            Project Types we Specialize in
          </Text>
        </Group>
        <SimpleGrid
          cols={2}
          mt="md"
          className={`${classes.grid} motion w-full py-6`}
          spacing="xl"
        >
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 ? (
                <div
                  key={`left-${index}`}
                  ref={(el) => {
                    if (el) itemsRef.current[index] = el;
                  }}
                >
                  {item}
                </div>
              ) : (
                <div key={`left-empty-${index}`}></div>
              )}
              {index % 2 !== 0 ? (
                <div
                  key={`right-${index}`}
                  ref={(el) => {
                    if (el) itemsRef.current[index] = el;
                  }}
                >
                  {item}
                </div>
              ) : (
                <div key={`right-empty-${index}`}></div>
              )}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </Card>
    </Center>
  );
}
