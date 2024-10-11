import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import siteConfig from 'data/config';

// Definição do tipo Twitter, adaptado conforme necessário
type Twitter = {
  cardType: string;
  site?: string;
  description?: string;
  images: string[];
};

// Extensão do NextSeoProps para incluir o título
export interface SEOProps extends NextSeoProps {
  image?: string; // Adicionando suporte a imagens customizadas
  twitter?: Twitter; // Adiciona o tipo Twitter
}

export const SEO = ({ title, description, image, ...props }: SEOProps) => {
  // Garantir que uma imagem padrão do OpenGraph seja usada se nenhuma for fornecida
  const ogImage =
    image ||
    siteConfig.seo?.openGraph?.images?.[0]?.url ||
    'default-image-url';

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        ...siteConfig.seo.openGraph,
        title: title || siteConfig.seo.title, // Usa o título do site como fallback
        description: description || siteConfig.seo.description, // Usa a descrição do site como fallback
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title || siteConfig.seo.openGraph?.images?.[0]?.alt || 'Default image description', // Usa o alt padrão se nenhum for passado
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
        site: siteConfig.seo.twitter?.site, // Adiciona o handle do Twitter se houver
        description: description || siteConfig.seo.description,
        images: [ogImage], // Imagem para Twitter Cards
      }} 
      titleTemplate={siteConfig.seo.titleTemplate || '%s | ::Player::'}
      {...props} // Espalha as outras propriedades que podem ser passadas
    />
  );
};
