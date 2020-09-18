import { useColorMode } from '@chakra-ui/core'
import { IconButton } from '@material-ui/core'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import React, { FC } from 'react'

const DarkmodeSwitch: FC<Props> = ({ onChange }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      onClick={() => {
        onChange(colorMode === 'dark' ? 'light' : 'dark')
        toggleColorMode()
      }}>
      {colorMode === 'dark' ? <Brightness4Icon /> : <BrightnessHighIcon />}
    </IconButton>
  )
}

export default DarkmodeSwitch

interface Props {
  onChange: (value: string) => void
}
