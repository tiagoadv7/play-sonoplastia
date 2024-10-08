import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import LogoSVG from 'public/static/logo/logo.svg'; // Importando SVG como componente

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  return (
    <chakra.div {...props}mt="-10px" display="flex" justifyContent="center">
      <LogoSVG width="110" height="110" /> {/* Renderizando o SVG diretamente */}
    </chakra.div>
  );
};
