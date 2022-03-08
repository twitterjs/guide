---
home: true
title: Home
heroImage: /branding/logo.png
actions:
  - text: Introduction
    link: /introduction.md
    type: secondary
  - text: Get Started
    link: /tutorial/installation.md
    type: primary
features:
  - title: Super Easy
    details: Twitter.js provides an object-oriented interface by abstracting away all the boring and tedious stuff. This makes working with the Twitter API super easy and fun.
  - title: Type Safe
    details: Twitter.js is written in TypeScript, which means it provides out of the box type safety, inline docs, and autocompletion. It also makes the library less prone to bugs.
  - title: Well Documented
    details: We understand the value of good documentation. Twitter.js comes with a well documented API reference website for quick look ups and a guide for learning how to use the library.
footer: MIT Licensed | Copyright © 2021 <a href="https://github.com/iShibi">Shubham Parihar</a>
footerHtml: true
---

```js
import { Client } from 'twitter.js';

const client = new Client();
await client.loginWithBearerToken('bearer-token');

const user = await client.users.fetchByUsername('iShiibi');
console.log(user.description); // Contributing to open-source 🌐
```
