import { defineUserConfig } from 'vuepress-vite';
import { description } from '../../package.json';
import type { DefaultThemeOptions, ViteBundlerOptions} from 'vuepress-vite';

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    lang: 'en-UK',
    title: 'Twitter.js Guide',
    description: description,
    bundler: '@vuepress/vite',
})