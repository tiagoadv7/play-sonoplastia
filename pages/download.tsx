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
        id: 'oss',
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
          href: 'https://download943.mediafire.com/vksyvz8iptlg62jYT3gNoUmmwWgpqLZFN0YGDMV3-F4hcoGmYFbEA1Q-hbLmQ7jh7ZMiiL2iwjaZo6IcRkMC83iiOhhGxW_7I7Fxin2Oa12oaPBfVUCX290scuPjymcV_UMT6JX6o3qb0u-Qtu4sk_5GzpnoCPJvTY0lcw0g6Ei0Xg/d3v8iy7tux95tlu/Youtube+Player-Setup-1.4.24.exe',
          label: 'Download',
        },
      },
      {
        id: 'bootstrap',
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
          href: 'https://download944.mediafire.com/je5pcxjyta9gSblhFA4UIQ5kEsPCkbftomTM_YEQQjlIAOJNLM86P7waYT-zckkC8j5uFJNz7I1zNTJGLvtmhafd9b_ItixcpGGIJaHaa_xrLSqxAJeO92SwI5oa-jouVIs_an6y-4O_y0W_ur4WODlYrNX7SglY0mo7k5NjdWE9Lg/pvsdam6sxp60rkm/V%C3%ADdeo+Player+Setup+1.3.24.exe',
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
                //    as="a"
                   colorScheme="primary"
                //    display="inline-flex" 
                //    alignItems="center"
                //    width="fit" 
                //    padding="8px 16px" 
                   href={plan.action.href}
                //    rel="noopener noreferrer" 
                >
                    <FiDownload style={{ marginRight: '8px' }} />
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
  