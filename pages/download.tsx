import {
    Box,
    Heading,
    HStack,
    Icon,
    SimpleGrid,
    StackProps,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { NextSeo } from 'next-seo';
  import { useRouter } from 'next/router';
  import { FiCheck } from 'react-icons/fi';
  import { BackgroundGradient } from 'components/gradients/background-gradient';
  import { ButtonLink } from 'components/button-link/button-link';
  import { FiDownload } from 'react-icons/fi';
  
  const DownloadPage = () => {
    const router = useRouter();
  
    const plans = [
      {
        id: 'youtubeplayer',
        title: 'YouTube Player',
        description: 'Uma interface fácil de usar, basta colar a URL.',
        price: 'Grátis',
        isRecommended: true,
        features: [
          { title: 'Rápido' },
          { title: 'Fácil' },
          { title: 'Prático' },
          { title: 'Leve' },
          {  title: 'Baixe já...',
            iconColor: 'green.500', },
        ],
        action: {
          href: 'https://download943.mediafire.com/vo27ff5up4bgkz6CqoB5suH4aKklfN-e1x31ged_Hs6L-l-ywAA1Nt80EN8HgFElXs7MijM532mKHXar1S4h4nYQE8qHIAGhKLfFz5EMtLtT5S1JI__y_Viru3QfTavH6vilBQI1f9Wcwsu9gx4pEOpplCGOPu7ff8Lrw6w201_0Nw/mnc4o8lzkbjte4v/Youtube+Player-Setup-1.4.24.exe',
          label: 'Download',
        },
      },
      {
        id: 'playervideo',
        title: 'Player Video',
        description: 'Para facilitar a reprodução em duas telas.',
        price: 'Grátis',
        isRecommended: true,
        features: [
          { title: 'Rápido' },
          { title: 'Fácil' },
          { title: 'Prático' },
          { title: 'Leve' },
          { title: 'Baixe já...', iconColor: 'green.500' },
        ],
        action: {
          href: 'https://download944.mediafire.com/pk3zarxt1w2gqJH-biRcPT927aKn3SMFnUiZQOULEMd4q1VamjBWXPWa3zeIKis74_6mrLHBkjYbMSeyMZY5RpEGvNLKAWkjeJ8OLOPMwfOTcXDE5C25Ld0nNdpjI-tvn3KYentOjJjKXg0vwrmM_7PhHCNiD-a37EcRIyqAhtngNA/lsg1kh28viboal5/V%C3%ADdeo+Player+Setup+1.3.24.exe',
          label: 'Download',

        },
      },
    ];
  
    return (
      <Box p={8} textAlign="center">
        <NextSeo title="::Sonoplastia::" />
        {/* <BackgroundGradient height="100%" /> */}
        <Box zIndex="2" pos="relative">
          <Heading mb={4} mt={12}>Faça o Download</Heading>
          <Text mt={4}>Comece a usar os aplicativos.</Text>
  
          <SimpleGrid columns={[1, null, 2]} spacing={16} mt={9} ml={28} mr={28}>
            {plans.map((plan) => (
              <PricingBox
                key={plan.id}
                title={plan.title}
                description={plan.description}
                price={plan.price}
                isRecommended={plan.isRecommended}
              >
                <PricingFeatures>
                  {plan.features.map((feature, index) => (
                    <PricingFeature key={index} {...feature} />
                  ))}
                </PricingFeatures>
                <ButtonLink
                size="lg"
                colorScheme="primary"
                width="fit-content" // Ensures the button fits its content size
                display="inline-flex" // Aligns content horizontally inside the button
                alignItems="center" // Centers the icon and text vertically
                padding="8px 8px" // Adjust padding for better spacing
                href={plan.action.href}
                rel="noopener noreferrer"
              >
                <FiDownload style={{ marginRight: '8px', transition: 'transform 0.3s ease' }} />
                {plan.action.label || 'Download'}
              </ButtonLink>

              </PricingBox>
            ))}
          </SimpleGrid>
  
          <Text mt={8} color="muted">
            Para manter a organização dos Cultos com mais agilidade!
          </Text>
        </Box>
      </Box>
    );
  };
  
  const PricingFeatures = ({ children }) => (
    <VStack align="stretch" spacing={2} mb={8}>
      {children}
    </VStack>
  );
  
  const PricingFeature = ({ title, iconColor = 'primary.500' }) => (
    <HStack>
      <FiCheck color={iconColor} />
      <Text flex="1" fontSize="sm">
        {title}
      </Text>
    </HStack>
  );
  
  const PricingBox = ({ title, description, price, children, isRecommended }) => (
    <VStack
      p={8}
      borderRadius="md"
      borderWidth={1}
      borderColor={isRecommended ? 'primary.500' : 'gray.400'}
      bg="whiteAlpha.600"
      _dark={{ bg: 'blackAlpha.300' }}
      alignItems="stretch"
      textAlign="left"
    >
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text color="muted">{description}</Text>
      <Text fontSize="2xl" fontWeight="bold" py={4}>
        {price}
      </Text>
      {children}
    </VStack>
  );
  
  export default DownloadPage;
  