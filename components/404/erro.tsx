import { Container, Flex, FlexProps, Text, VStack } from '@chakra-ui/react'

interface ErroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}

export const Erro = ({ title, description, children, ...rest }: ErroProps) => {
  return (
    <Flex py="20" alignItems="center" {...rest}>
      <Container>
        <VStack spacing={[4, null, 8]} alignItems="flex-center">
          <Text as="h1" textStyle="h1" textAlign="center">
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="center"
            color="gray.500"
            _dark={{ color: 'gray.400' }}
          >
            {description}
          </Text>
          
          {children}
        </VStack>
      </Container>
    </Flex>
  )
}