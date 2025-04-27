import type { Schema, Struct } from '@strapi/strapi';

export interface ContentImage extends Struct.ComponentSchema {
  collectionName: 'components_content_images';
  info: {
    description: 'An inline image with optional caption';
    displayName: 'ContentImage';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ContentTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_text_blocks';
  info: {
    description: 'Rich text paragraph';
    displayName: 'TextBlock';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.image': ContentImage;
      'content.text-block': ContentTextBlock;
    }
  }
}
