import styled from '@emotion/styled'
import { MuiThemeProvider } from '@material-ui/core'
import DarkmodeSwitch from 'components/DarkmodeSwitch'
import { DokzProvider } from 'dokz/dist'
import { getTheme } from 'lib/theme'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LanguageSelect from '../components/LanguageSwitch'

const SmallLogo = styled.img`
  height: 40px;
  cursor: pointer;

  @media (min-width: 767px) {
    display: none;
  }
`

const BigLogo = styled.img`
  width: 70%;
  cursor: pointer;

  @media (max-width: 767px) {
    display: none;
  }
`

const App = ({ Component, pageProps, router }: AppProps) => {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [colorMode, setColorMode] = useState('light')

  useEffect(() => {
    const routes = router.asPath.split('/')

    if (routes[1] !== currentLanguage) {
      routes.splice(1, 1)
      router.push(`/${currentLanguage}${routes.join('/')}`)
    }
  }, [currentLanguage])

  return (
    <MuiThemeProvider theme={getTheme(colorMode === 'dark')}>
      <DokzProvider
        headTitlePrefix='Inventhora | '
        githubUrl='https://github.com/BjoernRave/inventhora-docs'
        branch='master'
        docsRootPath={`pages/${currentLanguage}`}
        sidebarOrdering={{
          index: true,
          movements: {
            introduction: true,
          },
          inventory: {
            introduction: true,
          },
          product: {
            introduction: true,
          },
        }}
        headerLogo={
          <Link href={`/${currentLanguage}/`}>
            <a>
              <SmallLogo alt='Logo' src='/logo_small_512.png' />
              <BigLogo
                alt='Logo'
                src={
                  colorMode === 'light'
                    ? '/logo_large.png'
                    : '/logo_large_dark.png'
                }
              />
            </a>
          </Link>
        }
        headerItems={[
          <DarkmodeSwitch onChange={(v) => setColorMode(v)} key='1' />,
          <LanguageSelect
            key='2'
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
    </MuiThemeProvider>
  )
}

export default App
