import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Azeria",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-GB",
    baseUrl: "azeria.dev",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: true,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "rgba(250, 248, 248, 1)",
          lightgray: "rgba(229, 229, 229, 1)",
          gray: "rgb(126, 126, 126)",
          darkgray: "rgba(78, 78, 78, 1)",
          dark: "rgba(43, 43, 43, 1)",
          secondary: "rgba(85, 40, 99, 1)",
          tertiary: "rgba(132, 165, 157, 1)",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "rgba(255, 242, 54, 0.53)",
        },
        darkMode: {
          light: "rgba(22, 22, 24, 1)",
          lightgray: "rgba(57, 54, 57, 1)",
          gray: "rgba(100, 100, 100, 1)",
          darkgray: "rgba(212, 212, 212, 1)",
          dark: "rgba(235, 235, 236, 1)",
          secondary: "rgba(170, 123, 169, 1)",
          tertiary: "rgba(132, 165, 157, 1)",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "rgba(179, 170, 2, 0.53)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
