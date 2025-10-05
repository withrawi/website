import starlight from '@astrojs/starlight';
import {defineConfig} from 'astro/config';

// import starlightVersions from 'starlight-versions';

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        // starlightVersions({
        //   versions: [
        //     {
        //       slug: '0.0.x',
        //       label: 'rawi CLI 0.0.x',
        //     },
        //   ],
        // }),
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
              label: 'Quick Start Guide',
              slug: 'getting-started/quickstart',
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
              label: 'chat',
              slug: 'reference/chat',
            },
            {
              label: 'exec',
              slug: 'reference/exec',
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
            {
              label: 'act',
              slug: 'reference/act',
            },
            {
              label: 'provider',
              slug: 'reference/provider',
            },
            {
              label: 'completion',
              slug: 'reference/completion',
            },
          ],
        },
        {
          label: 'Advanced Features',
          items: [
            {
              label: 'Session Management',
              slug: 'advanced/sessions',
            },
            {
              label: 'Profile Management',
              slug: 'advanced/profiles',
            },
            {
              label: 'Shell Integration',
              slug: 'advanced/shell-integration',
            },
            {
              label: 'Usage Patterns',
              slug: 'advanced/usage',
            },
            {
              label: 'File Reading & Document Processing',
              slug: 'advanced/file-reading',
            },
          ],
        },
        {
          label: 'Workflows',
          items: [
            {
              label: 'Overview',
              slug: 'workflows',
            },
            {
              label: 'Development',
              items: [
                {
                  label: 'Code Review',
                  slug: 'workflows/code-review',
                },
                {
                  label: 'Git Integration',
                  slug: 'workflows/git-integration',
                },
                {
                  label: 'API Development',
                  slug: 'workflows/api-development',
                },
                {
                  label: 'Testing',
                  slug: 'workflows/testing',
                },
                {
                  label: 'Documentation Generation',
                  slug: 'workflows/documentation-generation',
                },
                {
                  label: 'Development Workflow',
                  slug: 'workflows/development',
                },
              ],
            },
            {
              label: 'Data & Analysis',
              items: [
                {
                  label: 'Data Analysis',
                  slug: 'workflows/data-analysis',
                },
              ],
            },
            {
              label: 'Content & Research',
              items: [
                {
                  label: 'Content Creation',
                  slug: 'workflows/content-creation',
                },
                {
                  label: 'Research',
                  slug: 'workflows/research',
                },
              ],
            },
          ],
        },
        {
          label: 'Help & Support',
          items: [
            {
              label: 'FAQ',
              slug: 'help/faq',
            },
            {
              label: 'Troubleshooting',
              slug: 'help/troubleshooting',
            },
          ],
        },
      ],
    }),
  ],
});
