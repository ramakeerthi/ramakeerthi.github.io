// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {
  SITE_TITLE,
  SITE_TAGLINE,
  SITE_URL,
  SITE_ORGANIZATION,
  SITE_PROJECT,
  GITHUB_URL,
  LINKEDIN_URL,
  LEETCODE_URL,
} from './siteConstants.js';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: SITE_TITLE,
  tagline: SITE_TAGLINE,
  favicon: 'img/logo.jpeg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: SITE_URL,
  baseUrl: '/',
  organizationName: SITE_ORGANIZATION,
  projectName: SITE_PROJECT,

  deploymentBranch: 'gh-pages',
  trailingSlash: false,


  onBrokenLinks: 'throw',

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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      image: 'img/logo.jpeg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: SITE_TITLE,
        logo: {
          alt: 'Personal logo',
          src: 'img/logo.jpeg',
        },
        items: [
          // Profile / Home
          {
            to: '/',
            label: 'Profile',
            position: 'left',
            activeBaseRegex: '^/$',
          },
          // Tutorials / DSA Notes
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          // Blog tab prepared but hidden for now:
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left',
          // },
          // External links (GitHub / LinkedIn) live in the footer instead
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: GITHUB_URL,
              },
              {
                label: 'LinkedIn',
                href: LINKEDIN_URL,
              },
              {
                label: 'LeetCode',
                href: LEETCODE_URL,
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Ramakeerthi. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
