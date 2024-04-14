## 简介

本项目是为了重构[OUTMAKER](https://theoutmaker.com.au/)网站，将网站从React SPA模式迁移到Next.js。由于SPA的特性，页面首次加载速度慢，同时不利于SEO，为了解决这个问题我调研了NextJS和Astro,分别运行了demo进行对比，
Astro开发速度并不如NextJS，在交互性上Astro依然依赖客户端组件，这和NextJS一样，在性能方面，两者并没有很大差别。总之，如果你的网站是一个纯粹的静态网站，那么Astro是更好的选择，如果你的网站有一定的交互性，那么NextJS是更好的选择。

## 特色

为了提高网页加载速度，尽可能多的使用服务端组件。在需要交互或者有动效的情况下，尽量使用css来替代js，例如导航栏都是由css控制的，没有用到一行js代码。
在无法避免交互的情况下，例如点击加入购物车按钮，再使用客户端组件进行渲染。

## 技术选型

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [daisyui](https://daisyui.com/)
* [React Icons](https://react-icons.github.io/react-icons/)
* [shadcn/ui](https://ui.shadcn.com/)

很多人会有疑问会什么没有选择TypeScript。当你的项目十分庞大，需要很多人互相配合时，那么使用TypeScript无疑会减少大量的沟通成本，另外一些类型错误，在编译阶段就能发现，这会减少很多调试时间。或者你的项目是一个非常底层的，很多人都需要依赖的项目，使用TypeScript会极大的降低运行风险。然而NEXTOUTMAKER并不是这样，它非常简单，代码量也不多，仅仅由我一人开发。我不希望在配置TypeScript和声明各种各样的Interface上花费时间，要知道它可能会占用我一半的开发时间，这太不划算了。

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
