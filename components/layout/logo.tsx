import * as React from 'react';
import { Box, Flex, Heading, VisuallyHidden } from '@chakra-ui/react';
import { Link } from '@saas-ui/react';

export interface LogoProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

import siteConfig from 'data/config';

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  let logo;
  
  if (siteConfig.logo) {
    // O logo sendo renderizado a partir do siteConfig
    logo = <Box as={siteConfig.logo} height="-20px" mt="-12" />;
  } else {
    logo = (
      <Heading as="h1" size="md">
        {siteConfig.seo?.title}
      </Heading>
    );
  }

  return (
    <Flex h="8" flexShrink="0" alignItems="flex-start">
      {/* Link que envolve o logo */}
      <Link href={href} display="flex" p="2" borderRadius="sm" onClick={onClick}>
        {logo}
      </Link>

      {/* VisuallyHidden garante que o texto é lido por screen readers mas não aparece visualmente */}
      <VisuallyHidden>
        {siteConfig.seo?.title}
      </VisuallyHidden>
    </Flex>
  );
};
