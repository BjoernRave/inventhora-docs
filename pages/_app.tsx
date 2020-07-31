import styled from '@emotion/styled'
import { ColorModeSwitch, DokzProvider } from 'dokz/dist'
import { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import LanguageSelect from '../components/LanguageSwitch'
const Logo = styled.img`
  width: 70%;
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
      headerLogo={<Logo src='/docs/logo_large.png' />}
      headerItems={[
        <ColorModeSwitch key='1' />,
        <LanguageSelect
          value={currentLanguage}
          onChange={setCurrentLanguage}
        />,
      ]}
      sidebarOrdering={{
        'index.mdx': true,
        Documents_Group: {
          'another.mdx': true,
        },
      }}>
      <Component {...pageProps} />
    </DokzProvider>
  )
}

export default App
