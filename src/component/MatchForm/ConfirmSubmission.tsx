import {FC} from "react"
import {Button, Stack} from '@chakra-ui/react'
import {Checkbox} from '@chakra-ui/react'
import {useWizard} from 'react-use-wizard'

import {useMatch} from "../../hooks/useMatch"

import './Form.css'

export const ConfirmSubmission: FC = () => {

  const { previousStep } = useWizard()
  const { register } = useMatch()

  return <>
    <div className='text-center p-4'>
      <Checkbox defaultChecked {...register("publish")}>Check to submit data</Checkbox>
    </div>
    <Stack direction="row" spacing={4} mt={10}>
      <Button onClick={previousStep}>Previous</Button>
      <Button type="submit">Submit</Button>
    </Stack>
  </>
}
