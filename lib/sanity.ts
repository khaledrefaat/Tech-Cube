import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import sanityConfig from './sanityConfig';

export const client = sanityClient(sanityConfig);

const builder = imageUrlBuilder(client);

export const urlForm = (source: SanityImageSource) => builder.image(source);
