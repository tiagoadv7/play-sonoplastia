import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Players Sonoplastia',
    
    description: 'Para maior agilidade e organização',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Atualizações',
      },
      {
        id: 'pricing',
        label: 'Download',
      },
      {
        id: 'faq',
        label: 'Como Usar',
      },
      // {
      //   label: '',
      //   href: '/',
      // },
      // {
      //   label: '',
      //   href: '/',
      //   variant: '',
      // },
    ],
  },
  footer: {
    copyright: (
      <>
        Desnsenvolvido por{' '}
        <Link href="https://github.com/tiagoadv7">Tiago Lima</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:tiagolimadbvs7@gmail.com',
        label: 'Contato',
      },
      {
        href: 'https://github.com/tiagoadv7/player-sonoplastia',
        label: <FaGithub size="14" />,
      },
      {
        href: 'https://wa.me/5548988747793',
        label: <FaWhatsapp size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Acessecibilidade',
        description: 'Uma aplicativo acessivel.',
      },
      {
        icon: FiCheck,
        title: 'Rapido',
        description:
          'Mas rapideze e agilidade.',
      },
      {
        icon: FiCheck,
        title: 'Desempenho',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Produtividade',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
