module.exports = {
  title: 'HerbsJS',
  tagline: 'Domain first - The core that matters',
  url: 'https://herbsjs.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-herbsjs.png',
  organizationName: 'herbsjs',
  projectName: 'website',
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
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/herbsjs',
          label: 'GitHub',
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
            },
            {
              label: 'Forum',
              to: 'https://github.com/herbsjs/forum',
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
              href: 'https://discordapp.com/invite/herbsjs',
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
              to: 'docs/institutional/acknowledgements',
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
};
