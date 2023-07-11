import React, {Children, FC, useState} from "react"
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps, Box,
} from '@chakra-ui/react'
import {Formik, Form, FormikConfig, FormikValues} from "formik"

export interface StepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string
}

export function FormStep({children}: StepProps) {
  return <>{children}</>
}

export const MatchForm: FC<FormikConfig<FormikValues>> = ({children, ...props}) => {

  const childrenArray = Children.toArray(children) as React.ReactElement<StepProps>[]
  console.log({childrenArray})
  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step]

  const {activeStep} = useSteps({
    index: 1,
    count: childrenArray.length,
  })

  console.log({activeStep})

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
        <Stepper index={activeStep}>
          {childrenArray.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon/>}
                  incomplete={<StepNumber/>}
                  active={<StepNumber/>}
                />
              </StepIndicator>

              <Box flexShrink='0'>
                <StepTitle>{step.props.label}</StepTitle>
              </Box>

              <StepSeparator/>
            </Step>
          ))}
        </Stepper>
        {currentChild}
        {step > 0 ? <button
          className="rounded-full py-2 px-4 mr-4 focus:outline-none bg-brandColor text-white font-medium"
          onClick={() => setStep(s => s - 1)}>Back</button> : null}
        <button
          className="rounded-full py-2 px-4 focus:outline-none bg-black text-white font-medium"
          type="submit">{isLastStep() ? 'Submit' : 'Next'}</button>
      </Form>
    </Formik>
  )
}
