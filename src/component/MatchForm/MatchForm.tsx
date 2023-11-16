import React, {Children, FC, useState} from "react"
import {
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper, Stack, Text
} from '@chakra-ui/react'
import {Formik, Form, FormikConfig, FormikValues} from "formik"

export interface StepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string
}

export function FormStep({children}: StepProps) {
  return <>{children}</>
}

export const MatchForm: FC<FormikConfig<FormikValues>> = ({children, ...props}) => {

  // @ts-ignore
  const childrenArray = Children.toArray(children) as React.ReactElement<StepProps>[]

  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step]
  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      <Form autoComplete="off">
        <Stack>
          <Stepper size='sm' index={step} gap={0}>
            {childrenArray.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon/>}
                  />
                </StepIndicator>
                <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Text className='font-bold py-4'>
          {currentChild.props.label}
        </Text>
        </Stack>
        {currentChild}
        {step > 0 ? <button type='button'
          className="rounded py-2 px-8 bg-blackColor text-white mr-5 mt-5 font-medium"
          onClick={() => setStep(step - 1)}>Back</button> : null}
        <button
          className="rounded py-2 px-8 bg-blackColor text-white mt-5 font-medium"
          type="submit">{isLastStep() ? 'Submit' : 'Next'}</button>
      </Form>
    </Formik>
  )
}
