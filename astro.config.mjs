// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Blue Archive Resources Scanner Docs",
      description:
        "A Python-based tool to scan and count owned resources in Blue Archive.",
      logo: {
        dark: "./src/assets/images/BA-Scanner_symbolon.png",
        light: "./src/assets/images/BA-Scanner_symbolon_transparent.png",
        replacesTitle: false,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/FleetingComet/BA-Scanner",
        },
      ],
      // editLink: {
      //   baseUrl: "https://github.com/FleetingComet/BA-Scanner/edit/main/docs/",
      // },
      lastUpdated: true,
      sidebar: [
        { label: "Home", link: "/" },
        {
          label: "Guides",
          //   items: [
          //     { label: "Installation", slug: "guides/installation" },
          //     { label: "Usage", slug: "guides/usage" },
          //     { label: "Configure Emulator", slug: "guides/configure-emulator" },
          //     {
          //       label: "Data Sync & Config",
          //       slug: "guides/data-sync-and-config",
          //     },
          //     { label: "Screen Navigation", slug: "guides/screen-navigation" },
          //   ],
          items: [{ autogenerate: { directory: "guides" } }],
        },
        { label: "How It Works", slug: "how-it-works" },
        { label: "Roadmap", slug: "roadmap" },
        { label: "Contributing", slug: "contributing" },
        {
          label: "Developer Reference",
          badge: { text: "Dev", variant: "caution" },
          //   items: [
          //     {
          //       label: "Screen Navigation Reference",
          //       slug: "dev/screen-navigation-reference",
          //     },
          //   ],
          items: [{ autogenerate: { directory: "dev" } }],
        },
      ],
    }),
  ],
});
