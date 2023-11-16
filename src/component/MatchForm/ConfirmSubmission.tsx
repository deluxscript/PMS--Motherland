import {FC} from "react"
import {Checkbox, Input} from '@chakra-ui/react'

import './Form.css'
import {Field} from "formik";
import {CheckboxComponent} from "../CustomInput/CustomInput"

export const ConfirmSubmission: FC = () => {

  return <>
    <div className='text-center p-4'>
      <Field
        name='publish'
        as={CheckboxComponent}
      />
    </div>
  </>
}
