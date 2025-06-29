import starlight from '@astrojs/starlight';
import {pluginCodeOutput} from '@fujocoded/expressive-code-output';
import {defineConfig} from 'astro/config';
import starlightVersions from 'starlight-versions';

export default defineConfig({
  integrations: [
    starlight({
      expressiveCode: {
        plugins: [pluginCodeOutput()],
      },
      plugins: [
        starlightVersions({
          versions: [
            {
              slug: '0.0.x',
              label: 'rawi CLI 0.0.x',
            },
          ],
        }),
      ],
      logo: {
        src: '/src/assets/rawi.png',
        alt: 'Rawi (راوي)',
      },
      title: 'Rawi (راوي)',
      description:
        'is a developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses directly in your terminal. Inspired by the rich Jordanian storytelling tradition, Rawi transforms your command line into an intelligent assistant for your development workflow.',
      editLink: {
        baseUrl: 'https://github.com/withrawi/website/tree/main',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withrawi/rawi',
        },
      ],
      sidebar: [
        {
          label: 'User Guide',
          items: [
            {
              label: 'Introduction',
              slug: 'userguide',
            },
            {
              label: 'Examples',
              slug: 'userguide/welcome-examples',
            },
          ],
        },
        {
          label: 'Get Started',
          items: [
            {
              label: 'Introduction',
              slug: 'getting-started',
            },
            {
              label: 'Installation/Upgrade',
              slug: 'getting-started/install',
            },
            {
              label: 'Past releases',
              slug: 'getting-started/version',
            },
            {
              label: 'Build and install from source',
              slug: 'getting-started/getting-started-source-install',
            },
          ],
        },
        {
          label: 'Configure the rawi CLI',
          items: [
            {
              label: 'Introduction',
              slug: 'configure',
            },
            {
              label: 'Configuration settings',
              slug: 'configure/settings',
            },
            {
              label: 'Environment Variables',
              slug: 'configure/envvars',
            },
            {
              label: 'Command Line Options',
              slug: 'configure/options',
            },
            {
              label: 'Supported AI Providers',
              slug: 'configure/providers',
            },
            {
              label: 'Act Templates',
              slug: 'configure/act-templates',
            },
          ],
        },
        {
          label: 'rawi CLI Command Reference',
          items: [
            {
              label: 'Introduction',
              slug: 'reference',
            },
            {
              label: 'ask',
              slug: 'reference/ask',
            },
            {
              label: 'configure',
              slug: 'reference/configure',
            },
            {
              label: 'history',
              slug: 'reference/history',
            },
            {
              label: 'info',
              slug: 'reference/info',
            },
          ],
        },
      ],
    }),
  ],
});
