// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aoki 的自留地',
  tagline: 'frontend blog',
  url: 'https://phero.live',
  baseUrl: '/',
  onBrokenLinks: 'throw', //  编译遇到死链怎么处理
  onBrokenMarkdownLinks: 'warn',  // Docusaurus 在检测到重复路径时的行为。默认情况下，Docusaurus 将在运行 yarn start 或 yarn build 后输出警告。
  favicon: 'img/favicon.ico',
  organizationName: 'aokikoko', // Usually your GitHub org/user name.
  projectName: 'aokikoko.github.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/aokikoko/aokikoko.github.io/blob/main/website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Aoki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        // hideOnScroll: true,  // 文档页面向下滚动时收起顶部导航
        style: 'dark',  // dark 和 primary (基于 --ifm-color-main 颜色)。
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '笔记',
          },
          // 待完成关于我页面
          // {
          //   to: '/me',   点击后跳转的链接，站内跳转用 to ,站外用 href
          //   activeBasePath: 'docs',  根据它显示当前高亮
          //   label: '关于我',
          //   position: 'left'
          // },
          // 先隐藏blog
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/aokikoko',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      hideableSidebar: true,  // 左侧边栏是否可收缩
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '笔记 Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/aokikoko',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aoki, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        // theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: 'BMRZNSN9O0',
  
        // Public API key: it is safe to commit it
        apiKey: '70e8d7a1d265f5af8aab3f33f833655c',
  
        indexName: 'dev_docusaurus',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        //... other Algolia params
      },
      // 顶部公告栏
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
    }),
};

module.exports = config;
