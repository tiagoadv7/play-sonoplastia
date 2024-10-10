import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiPlay,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";
import { ButtonLink } from "components/button-link/button-link";
import DownloadPage, { Download } from "pages/download";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";
import download from "pages/download";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Play Sonoplastia"
        description="Para facilitar o seu cotidiano"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <DownloadSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 40 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Aplicativos que irá facilitar 
                a organização <br/>
                e praticidade
                da Sonoplastia!
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Fique por dentro das últimas <Em>atualizações e melhorias</Em>
                <Br /> dos aplicativos.<Br />{" "}
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
              
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/#download">
                  Download
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/#faq"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Saiba como usar
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="300px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "40%", xl: "60%" }} 
            width="80vw"
            maxW="500px"
            margin="10 auto"
            zIndex={1}
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="90%">
                <Image
                  src="/static/screenshots/TelaiApp.png"
                  layout="flex"
                  width={1200}
                  height={762}
                  alt="Tela Inicial do App"
                  quality="100"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
          <Box
            height="710px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "40%", xl: "45%" }}
            width="50vw"
            maxW="400px"
            margin="20 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="80%">
                <Image
                  src="/static/screenshots/TelaAPP.png"
                  layout="flex"
                  width={1200}
                  height={762}
                  alt="Tela Inicial do App"
                  quality="100"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Fácil de usar",
            icon: FiToggleLeft,
            description: "Interface amigavel e simples.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Agilidade",
            icon: FiSliders,
            description:
              "Mais praticidade e facilidade de uso.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Versatilidade",
            icon: FiGrid,
            description:
              "Só arrastar e soltar que ja adiciona na fila.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Mais produtividade",
            icon: FiThumbsUp,
            description:
              "Com um click e já esta em reprodução.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  // const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Mais produtividade para sua Igreja!">
        <VStack alignItems="flex-start" spacing="6">
          <Text color="muted" fontSize="xl">
            Para o Player <Em>de video Youtube</Em>.
            O Aplicativo só precisa está conectado a rede para que a função de URL 
            funcione de foma rapida e eficiente através da Web
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                Só colar
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                a URL no campo indicado e apretar o Play
              </Text>
            </Box>
          
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Uma aplicação pensada em facilitar">
        <Text color="muted" fontSize="lg">
        Executar diretamente do programa, bastando apenas colar a URL do Youtube, para que seja executado dentro do programa.        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Players"
        description="Sonoplastia"
        avatar="/static/logo/logo1.png"
        gradient={["pink.200", "purple.500"]}
      >
        “Mais praticidade para o seu dia.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Conheça o Programa"
      >
        <Text color="muted" fontSize="lg">
          Uma aplicação pensada em levar mais praticidade e agilidade para a sonoplastia de igrejas.
        </Text>
        <Wrap mt="8">
          {[
            "Abre em segunda tela",
            "Facil navegação",
            "Lista de videos",
            "Leve e Rápido",
            "Envie Arquivos Localmente",
            "Botão de procurar video",
            "Botão para play video",
            "Só arrastar o video para a interface",
            "Alertas de erro",
            "Sobre o APP",
            "Contato do desenvolvedor",
            "Mais produtividade",
            "Tempo de Resposta",
            "Atualizações",
            "Tecnologia",
            "Responsividade",
            "Para ajudar você",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Por dentro das
          <Br /> Novidades.
        </Heading>
      }
      description={
        <>
          Versões sempre atualizadas.
          <Br />
          Correções de erros.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Tecnologias.",
          icon: FiBox,
          description:
            "Desenvolvido em Electron Js.",
          variant: "inline",
        },
        {
          title: "Icones.",
          icon: FiToggleLeft,
          description:
            "Para facilitar o uso do App.",
          variant: "inline",
        },
        {
          title: "Pagina.",
          icon: FiSearch,
          description:
            "Criado apartir de paginas Web.",
          variant: "inline",
        },
        {
          title: "Compartilhe.",
          icon: FiUserPlus,
          description:
            "Com outros sonoplastas.",
          variant: "inline",
        },
        {
          title: "YouTube Player.",
          icon: FiCode,
          description:
            "Versão 1.4.24",
          variant: "inline",
        },
        {
          title: "Video Player.",
          icon: FiCode,
          description:
            "Versão 1.3.24",
          variant: "inline",
        },
        // {
        //   title: "Themes.",
        //   icon: FiToggleLeft,
        //   description:
        //     "Includes multiple themes with darkmode support, always have the perfect starting point for your next project.",
        //   variant: "inline",
        // },
        // {
        //   title: "Generators.",
        //   icon: FiTerminal,
        //   description:
        //     "Extend your design system while maintaininig code quality and consistency with built-in generators.",
        //   variant: "inline",
        // },
        // {
        //   title: "Monorepo.",
        //   icon: FiCode,
        //   description: (
        //     <>
        //       All code is available as packages in a high-performance{" "}
        //       <Link href="https://turborepo.com">Turborepo</Link>, you have full
        //       control to modify and adjust it to your workflow.
        //     </>
        //   ),
        //   variant: "inline",
        // },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const DownloadSection = () => {
  return (
    <Box id="download">
      <DownloadPage {...download} />
    </Box>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};




export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        // title: "Support us by becoming a stargazer! 🚀 ",
        // description:
        //   '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        // href: "https://github.com/saas-js/saas-ui",
        // action: false,
      },
    },
  };
}
