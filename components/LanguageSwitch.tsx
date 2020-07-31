import styled from '@emotion/styled'
import { MenuItem, Select } from '@material-ui/core'
import React, { FC } from 'react'

const StyledSelect = styled(Select)`
  font-size: 24px !important;
  height: 30px !important;
  margin-left: 5px;

  ::before {
    border-bottom: none !important;
  }

  .MuiSelect-select {
    display: flex;
  }
`

const Flag = styled.img`
  height: 25px;
  width: auto;
`

const LanguageSelect: FC<Props> = ({ value, onChange }) => {
  return (
    <StyledSelect
      value={value}
      onChange={(e) => onChange(e.target.value as string)}>
      <MenuItem value='es'>
        <Flag alt='spanish' src='/docs/flag_es.png' />
      </MenuItem>
      <MenuItem value='en'>
        <Flag alt='english' src='/docs/flag_en.png' />
      </MenuItem>
      <MenuItem value='pt'>
        <Flag alt='portuguese' src='/docs/flag_pt.png' />
      </MenuItem>
      <MenuItem value='de'>
        <Flag alt='german' src='/docs/flag_de.png' />
      </MenuItem>
    </StyledSelect>
  )
}

export default LanguageSelect

export interface Props {
  value: string
  onChange: (lng: string) => void
}
