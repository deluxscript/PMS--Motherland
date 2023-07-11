import {FC} from "react"
import {Button, NumberInput, NumberInputField, Stack} from '@chakra-ui/react'
import {Input, Select} from '@chakra-ui/react'
import { useWizard } from 'react-use-wizard'

import {useMatch} from "../../hooks/useMatch"

import './Form.css'

export const InitialStep: FC = () => {

  const {nextStep} = useWizard()
  const { register } = useMatch()

  return (
    <>
      <Stack direction='row' spacing={2} justify="center">
        <Input placeholder='Home Team' {...register('homeTeam')} />
        <Input placeholder='Away Team' {...register('awayTeam')} />
      </Stack>
      <Stack direction='row' mt={10} spacing={2} shouldWrapChildren>
        <NumberInput size='sm' maxW={150}>
          <NumberInputField placeholder='Home Score' {...register('homeScore')}/>
        </NumberInput>
        <NumberInput size='sm' maxW={1250}>
          <NumberInputField placeholder='Away Score' {...register('awayScore')}/>
        </NumberInput>
      </Stack>
      <Stack direction='row' spacing={4} mt={10} justify="center">
        <Input placeholder='Example: 01-8-2023'
                   {...register('timestamp')}/>
        <Select placeholder='Select Match Type' {...register('type')}>
          <option value='League'>League</option>
          <option value='Cup'>Cup</option>
          <option value='Friendly'>Friendly</option>
        </Select>
        <Input placeholder='Example: Round 1, Preparation'
                   {...register('stage')} />
      </Stack>
      <Stack direction="row" spacing={4} mt={10}>
        <Button type="submit">Save</Button>
        <Button onClick={nextStep}>Next</Button>
      </Stack>
    </>
  )
}
