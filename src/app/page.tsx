// import { AdvantagesSection } from "@/components/AdvantagesSection";
import { CapabilitySection } from "@/components/CapabilitySection";
import { GetInTouch } from "@/components/contact/GetInTouch";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { HeroSection } from "@/components/HeroSection";
import { ServiceSection } from "@/components/ServiceSection";
import { SpecializationSection } from "@/components/SpecializationSection";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
} from "@mantine/core";

export default function Home() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShellHeader
        styles={{ header: { background: "none", borderBottom: "none" } }}
      >
        <HeaderMegaMenu />
      </AppShellHeader>
      <AppShellMain styles={{ main: { padding: 0 } }}>
        <HeroSection />
        <SpecializationSection />
        <ServiceSection />
        <CapabilitySection />
        {/* <AdvantagesSection /> */}
        <GetInTouch />
      </AppShellMain>
    </AppShell>
  );
}
