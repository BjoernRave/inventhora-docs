import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import NextLink from 'next/link'
import React, { FC } from 'react'

const ATag = styled.a`
  transition: border-color 0.2s ease-in-out 0s;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  width: fit-content;
  position: relative;
  line-height: 1.4em;
  color: #3182ce;
  font-weight: 500;
  border-bottom: 2px solid;
  border-bottom-color: currentcolor;
  border-color: transparent;
  padding-top: 0.2em;
  padding-bottom: 0.2em;

  :hover {
    border-color: currentColor;
  }
`

const Link: FC<Props> = ({ href, children }) => {
  const router = useRouter()

  const routes = router.asPath.split('/')

  return (
    <NextLink scroll={false} passHref href={`/${routes[1]}${href}`}>
      <ATag>{children}</ATag>
    </NextLink>
  )
}

export default Link

interface Props {
  href: string
}
