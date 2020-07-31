import styled from '@emotion/styled'
import { ColorModeSwitch, DokzProvider } from 'dokz/dist'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LanguageSelect from '../components/LanguageSwitch'
const Logo = styled.img`
  width: 70%;
  cursor: pointer;
`

const App = ({ Component, pageProps, router }: AppProps) => {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  useEffect(() => {
    const routes = router.asPath.split('/')

    if (routes[1] !== currentLanguage) {
      routes.splice(1, 1)
      router.push(`/${currentLanguage}${routes.join('/')}`)
    }
  }, [currentLanguage])

  return (
    <DokzProvider
      docsRootPath={`pages/${currentLanguage}`}
      headerLogo={
        <Link href={`/${currentLanguage}/`}>
          <a>
            <Logo src='/logo_large.png' />
          </a>
        </Link>
      }
      headerItems={[
        <ColorModeSwitch key='1' />,
        <LanguageSelect
          value={currentLanguage}
          onChange={setCurrentLanguage}
        />,
      ]}>
      <Head>
        <link rel='shortcut icon' href='/logo_small_32.png' />
      </Head>
      <NextSeo title='Inventhora Docs' />
      <Component {...pageProps} />
    </DokzProvider>
  )
}

export default App
