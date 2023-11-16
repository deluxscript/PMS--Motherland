import { FC } from "react"
import { Stack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

import './Form.css'
import { Field } from "formik"

export const InitialStep: FC = () => {

  return (
    <>
      <Stack direction='row' spacing={2} justify="center">
        <Field
          name="homeTeam"
          as={Input}
          placeholder="Home Team"
          className='outline-0'
        />
        <Field
          name="awayTeam"
          as={Input}
          placeholder="Away Team"
          className='outline-0'
        />
      </Stack>
      <Stack direction='row' mt={10} spacing={2} shouldWrapChildren>
        <Field
          name='homeScore'
          placeholder="Home Score"
          type='number'
          className='min-w-150 h-10 px-4 border rounded outline-0'
        />
        <Field
          name='awayScore'
          placeholder="Away Score"
          type='number'
          className='min-w-150 h-10 px-4 border rounded outline-0'
        />
      </Stack>
      <Stack direction='row' spacing={4} mt={10} justify="center">
        <Field
          name="timestamp"
          as={Input}
          placeholder="Example: 01-8-2023"
          className='outline-0'
        />
        <Field as="select" name="type" className='border rounded px-4 outline-0'>
          <option value='League'>League</option>
          <option value='Cup'>Cup</option>
          <option value='Friendly'>Friendly</option>
        </Field>
        <Field
          name="stage"
          as={Input}
          placeholder="Example: Round 1, Preparation"
          className='outline-0'
        />
      </Stack>
    </>
  )
}
