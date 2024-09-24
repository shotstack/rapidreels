# RapidReels

RapidReels is an application that allows you to create faceless TikTok videos using generative AI.

View demo: https://rapidreels.vercel.app/

## Getting Started

### Install dependencies

First, install the required dependencies:

```bash
yarn
```

### Configure API keys

You require a Shotstack and OpenAI production API key. Copy these to `env.local.dist` and rename to `env.local`.

### Run development server

You can run a development server on localhost:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

You can deploy this application directly to Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fshotstack%2Frapidreels&env=SHOTSTACK_API_KEY,OPENAI_API_KEY&envDescription=API%20keys%20needed%20for%20the%20application&envLink=https%3A%2F%2Fdashboard.shotstack.io%2Fregister&demo-title=Rapid%20Reels&demo-description=An%20example%20social%20media%20video%20generator&demo-url=https%3A%2F%2Frapidreels.vercel.app%2F)
