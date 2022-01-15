module.exports = {
  title: 'HerbsJS - Build microservices with DDD and Clean Achitecture',
  tagline: 'Domain first - The core that matters',
  url: 'https://herbsjs.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-herbsjs.png',
  organizationName: 'herbsjs',
  projectName: 'website',
  customFields: {
    description: 'Herbs - Build your microservices in Node.js with Clean Architecture and Domain Driven Design.',
  },
  themeConfig: {
    gtag: {
      trackingID: 'G-LMCPKQXZHH'
    },
    navbar: {
      logo: {
        alt: 'HerbsJs\'s logo',
        src: 'img/herbsjs.svg',
        srcDark: 'img/herbsjs-white.png',
      },
      items: [
        {
          href: 'https://twitter.com/herbsjs',
          className: 'twitter-icon',
          'aria-label': 'Twitter',
          position: 'right',
        },
        {
          href: 'https://stackoverflow.com/questions/tagged/herbsjs',
          className: 'stackoverflow-icon',
          'aria-label': 'Stack Overflow',
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
        src: 'img/logo-herbsjs-branco.png',
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
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/herbsjs',
            },
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
    colorMode: {
      switchConfig: {
        darkIcon: " ",
        lightIcon: " ",
      }
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/herbsjs/herbsjs.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
  ]
};
