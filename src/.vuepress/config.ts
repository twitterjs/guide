import { defineUserConfig } from 'vuepress-vite';
import { description } from '../../package.json';
import type { DefaultThemeOptions, ViteBundlerOptions} from 'vuepress-vite';

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: 'en-UK',
  title: 'Twitter.js Guide',
  description: description,
  bundler: '@vuepress/vite',
  head: [
    ['meta', { property: 'og:title', content: 'Twitter.js Guide' }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/branding/logo.png' }],
    ['meta', { property: 'og:locale', content: 'en_UK' }],
    ['meta', { name: 'theme-color', content: '#f7df1e' }],
    ['meta', { name: 'twitter:title', content: 'Twitter.js Guide'}],
    ['meta', { name: 'twitter:description', content: 'The official guide for twitter.js library'}],
    ['meta', { name: 'twitter:image', content: 'https://twitterjs-guide.pages.dev/branding/logo.png'}],
    ['meta', { name: 'twitter:card', content: 'summary'}],
  ],
  themeConfig: {
    repo: 'https://github.com/twitterjs/twitter.js',
    docsRepo: 'https://github.com/twitterjs/guide',
    docsDir: 'src',
    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Tutorial',
        link: '/tutorial/installation'
      },
      {
        text: 'How-To',
        link: '/how-to/README.md'
      },
      {
        text: 'Reference',
        link: 'https://twitter.js.org'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/f5Pefuskx4'
      }
    ],
    sidebar: {
      '/tutorial/': [
        {
          text: 'Tutorial',
          children: ['/tutorial/installation']
        }
      ],
      '/how-to/': [
        {
          text: 'How-To',
          children: ['/how-to/README.md']
        }
      ]
    }
  }
})