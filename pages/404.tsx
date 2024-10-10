import Head from 'next/head';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { Container } from '@chakra-ui/react';
import { Erro } from 'components/404/erro';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Player Sonoplastia</title>
      </Head>
      <Erro
      id='404'
      title={
        404
      }
      description={
        <p >
          <span>Oops, não conseguimos encontrar essa página!</span>
          <br />
          <span>Clique no botão abaixo para voltar à Página Inicial</span>
        </p>
      }
      >
        <Link href='/' className={roboto.className}>
          Ir para a página inicial
        </Link>   
      </Erro>
    </>
  );
};

export default NotFound;
