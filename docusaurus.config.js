// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NETOPIA Payments',
  tagline: 'Payment API',
  url: 'https://navid59.github.io',
  baseUrl: '/ntp-payment-api-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'navid59', // Usually your GitHub org/user name.
  projectName: 'ntp-payment-api-doc', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/navid59/ntp-payment-api-doc/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/navid59/ntp-payment-api-doc/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Netopia Payment',
          src: 'img/logo-blue.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documents',
          },
          {
            href: 'https://documenter.getpostman.com/#',
            label: 'Postman',
            position: 'right',
          },
          {
            href: 'https://github.com/mobilpay/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Payment API',
            items: [
              {
                label: 'Documents',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Other Services',
            items: [
              {
                label: 'Card',
                href: 'https://netopia-payments.com/servicii/card/',
              },
              {
                label: 'SMS',
                href: 'https://netopia-payments.com/servicii/sms/',
              },
              {
                label: 'mobilPay Wallet',
                href: 'https://netopia-payments.com/servicii/mobilpay-wallet-plata-cu-mobilul/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact',
                href: 'https://netopia-payments.com/contact/',
              },
              {
                label: 'Suport',
                href: 'https://netopia-payments.com/contact-suport/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NETOPIA Payments.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php'],
      },
    }),
};

module.exports = config;
