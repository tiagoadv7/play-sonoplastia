import { Button, ButtonProps } from '@chakra-ui/react'
import NextLink, { LinkProps } from 'next/link'

export type ButtonLinkProps = LinkProps & ButtonProps

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref>
      <Button {...props} as="a" width="fit-content" rel="noopener noreferrer">{children}</Button>
    </NextLink>
  )
}
