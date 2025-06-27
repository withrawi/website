import starlight from '@astrojs/starlight';
import {defineConfig} from 'astro/config';
import starlightVersions from 'starlight-versions';

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightVersions({
          versions: [{slug: '0.0.0'}],
        }),
      ],
      title: 'Rawi (راوي)',
      description:
        'is a developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses directly in your terminal. Inspired by the rich Jordanian storytelling tradition, Rawi transforms your command line into an intelligent assistant for your development workflow.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withrawi/rawi',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {label: 'Introduction', slug: 'getting-started/introduction'},
          ],
        },
      ],
    }),
  ],
});
