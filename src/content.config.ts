import {docsLoader} from '@astrojs/starlight/loaders';
import {docsSchema} from '@astrojs/starlight/schema';
import {defineCollection} from 'astro:content';
import {docsVersionsLoader} from 'starlight-versions/loader';

export const collections = {
  docs: defineCollection({loader: docsLoader(), schema: docsSchema()}),
  versions: defineCollection({loader: docsVersionsLoader()}),
};
