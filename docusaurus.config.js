module.exports = {
  title: 'HerbsJS',
  tagline: 'Domain first - The core that matters',
  url: 'https://herbsjs.github.io',
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-herbsjs.png',
  organizationName: 'herbsjs',
  projectName: 'website',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'HerbsJs\'s logo',
        src: 'img/herbsjs.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'right'
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
        alt: 'HerbsJS Logo',
        src: 'img/logo-herbsjs-branco.png',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
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
          ],
        },
      ],
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
            'https://github.com/herbsjs/website/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
