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
      title: 'HerbsJs',
      logo: {
        alt: 'HerbsJs\'s logo',
        src: 'img/logo-herbsjs.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/herbsjs',
          label: 'GitHub',
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
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/herbsjs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HerbsJS`,
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
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/herbsjs/website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
