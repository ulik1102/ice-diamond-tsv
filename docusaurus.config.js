// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ice World',
  tagline: 'Introduction to the world of Figure Skating',
  favicon: 'img/4542682.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/4542682.png',
      navbar: {
        title: 'Ice World',
        logo: {
          alt: 'My Site Logo',
          src: 'img/4542682.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Achievements',
          },
          {to: '/blog', label: 'Important Info', position: 'left'},
          {
            href: 'https://www.instagram.com/olympics?igsh=MWEzanFnYmZpZ2d4Mw==',
            label: 'Olympics',
            position: 'right',
          },
          {
            href: 'https://www.instagram.com/olympic_russia?igsh=NW9rdHJyeGF6NWtn',
            label: 'ROC',
            position: 'right',
          },
          {
            href: 'https://www.instagram.com/isufigureskating?igsh=MWhqNmh6bnR4amdvaw==',
            label: 'ISU',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Achievements',
                to: '/docs/category/ice-skating',
              },
            ],
          },
          {
            title: 'Insta-community',
            items: [
              {
                label: 'Olympics',
                href: 'https://www.instagram.com/olympics?igsh=MWEzanFnYmZpZ2d4Mw==',
              },
              {
                label: 'ROC',
                href: 'https://www.instagram.com/olympic_russia?igsh=NW9rdHJyeGF6NWtn',
              },
              {
                label: 'ISU',
                href: 'https://www.instagram.com/isufigureskating?igsh=MWhqNmh6bnR4amdvaw==',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Important Info',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Ice World`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
