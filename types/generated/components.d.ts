import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentBouton extends Struct.ComponentSchema {
  collectionName: 'components_component_boutons';
  info: {
    description: '';
    displayName: 'Bouton';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Titre: Schema.Attribute.String;
  };
}

export interface ComponentCarte extends Struct.ComponentSchema {
  collectionName: 'components_component_cartes';
  info: {
    description: '';
    displayName: 'Carte';
  };
  attributes: {
    Contenue: Schema.Attribute.RichText;
    couleur: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    strong: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Titre: Schema.Attribute.RichText;
  };
}

export interface ComponentDescription extends Struct.ComponentSchema {
  collectionName: 'components_component_descriptions';
  info: {
    description: '';
    displayName: 'Description';
  };
  attributes: {
    Contenue: Schema.Attribute.RichText;
    strong: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ComponentImage extends Struct.ComponentSchema {
  collectionName: 'components_component_images';
  info: {
    description: '';
    displayName: 'image';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Size: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<50>;
  };
}

export interface StructureColumn extends Struct.ComponentSchema {
  collectionName: 'components_structure_columns';
  info: {
    description: '';
    displayName: 'Column';
  };
  attributes: {
    Bouton: Schema.Attribute.Component<'component.bouton', true>;
    Cartes: Schema.Attribute.Component<'component.carte', true>;
    Description: Schema.Attribute.Component<'component.description', true>;
    Images: Schema.Attribute.Component<'component.image', true>;
    name: Schema.Attribute.String;
    sizeDesktop: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<6>;
    SizeMobile: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      >;
  };
}

export interface StructureRow extends Struct.ComponentSchema {
  collectionName: 'components_structure_rows';
  info: {
    description: '';
    displayName: 'Row';
  };
  attributes: {
    Column: Schema.Attribute.Component<'structure.column', true>;
    name: Schema.Attribute.String;
    PaddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    PaddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    TextPosition: Schema.Attribute.Enumeration<['start', 'center', 'end']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'start'>;
  };
}

export interface StructureSection extends Struct.ComponentSchema {
  collectionName: 'components_structure_sections';
  info: {
    description: '';
    displayName: 'section';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    couleur: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Hauteur: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<50>;
    row: Schema.Attribute.Component<'structure.row', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.bouton': ComponentBouton;
      'component.carte': ComponentCarte;
      'component.description': ComponentDescription;
      'component.image': ComponentImage;
      'structure.column': StructureColumn;
      'structure.row': StructureRow;
      'structure.section': StructureSection;
    }
  }
}
