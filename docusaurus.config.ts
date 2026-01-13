import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mythril Docs',
  tagline: 'Forge anything with AI-powered development',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.mythril.dev',
  baseUrl: '/',

  organizationName: 'mythril',
  projectName: 'mythril-docs',

  onBrokenLinks: 'throw',


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/mythril-social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Mythril',
      logo: {
        alt: 'Mythril Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://discord.gg/5DhmG2uvBp',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/Zarosk/mythril-bot',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/quick-start',
            },
            {
              label: 'Commands',
              to: '/commands',
            },
            {
              label: 'Features',
              to: '/features',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/5DhmG2uvBp',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Zarosk/mythril-bot',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/legal/privacy',
            },
            {
              label: 'Terms of Service',
              to: '/legal/terms',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Mythril. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
