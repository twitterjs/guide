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
        text: 'API',
        link: 'https://twitter.js.org'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/f5Pefuskx4'
      }
    ]
  }
})