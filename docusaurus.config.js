module.exports = {
  title: 'HerbsJS - Build microservices with DDD and Clean Achitecture',
  tagline: 'Domain first - The core that matters',
  url: 'https://herbsjs.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-herbsjs.svg',
  organizationName: 'herbsjs',
  projectName: 'website',
  customFields: {
    description: 'Herbs - Build your microservices in Node.js with Clean Architecture and Domain Driven Design.',
  },
  themeConfig: {
    navbar: {
      logo: {
        alt: 'HerbsJs\'s logo',
        src: 'img/herbsjs.svg',
        srcDark: 'img/herbsjs-white.svg',
      },
      items: [
        {
          href: 'https://twitter.com/herbsjs',
          className: 'twitter-icon',
          'aria-label': 'Twitter',
          position: 'right',
        },
        {
          href: 'https://discord.gg/e3cQ66KDv5',
          className: 'discord-icon',
          'aria-label': 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Herbs Logo',
        src: 'img/logo-herbsjs-branco.svg',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation Guide',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/e3cQ66KDv5',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/herbsjs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/herbsjs',
            },
            {
              label: 'Acknowledgements',
              to: 'docs/project/acknowledgements',
            },
          ],
        },
      ],
    },
    mermaid: {
      theme: { light: 'base', dark: 'forest' },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/herbsjs/herbsjs.github.io/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-LMCPKQXZHH'
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus2-dotenv", {
        systemvars: true,
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};
