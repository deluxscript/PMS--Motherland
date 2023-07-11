import {FC, useState} from "react"
import ReactDOM from "react-dom"
import { Wizard } from 'react-use-wizard'

import {Popup} from "../Popup/Popup"
import {InitialStep} from "../MatchForm/InitialStep";

import {initialFormValues, useMatch} from "../../hooks/useMatch";

import './MatchPopup.css'
import {matchDataType} from "../../api";
import {OffensiveStats} from "../MatchForm/OffensiveStats";
import {useDispatch, useSelector} from "react-redux";
import {playersSelector} from "../../store/slices/PlayersSlice";
import {DistributionStats} from "../MatchForm/DistributionStats";
import {DefensiveStats} from "../MatchForm/DefensiveStats";
import {GoalkeeperStats} from "../MatchForm/GoalKeeperStats";
import {PhysicalData} from "../MatchForm/PhysicalData";
import {ConfirmSubmission} from "../MatchForm/ConfirmSubmission";
import {AppDispatch} from "../../store/types";
import {saveMatchPerformanceThunk} from "../../store/slices/MatchPerformanceSlice";
import {Field, FormikProps} from "formik"
import {FormStep, MatchForm} from "../MatchForm/MatchForm";
import {TextField} from "formik-mui"
import {Button, Input, NumberInput, NumberInputField, Select, Stack} from "@chakra-ui/react";

type MatchPopupProps = {
  onClose: () => void
}

export const CheckIt: FC = () => {
  const initialValues: matchDataType = initialFormValues

  return (
    <>
      <MatchForm
        initialValues={initialValues}
        validate={(values: Partial<matchDataType>) => {
          const errors: Partial<matchDataType> = {};
          if (!values.timestamp) {
            errors.timestamp = "Timestamp is required";
          } else if (
            !/^(\d{2})-(\d{1,2})-(\d{4})$/.test(values.timestamp)
          ) {
            errors.timestamp = "Timestamp format not allowed"
          }
          return errors
        }}
        onSubmit={async (data) => {
          console.log("Data", data);
        }}
      >
        <FormStep label="Ballot Details">
          <>
            <Stack direction='row' spacing={2} justify="center">
              <Input placeholder='Home Team' name='homeTeam' />
              <Input placeholder='Away Team' name='awayTeam' />
            </Stack>
            <Stack direction='row' mt={10} spacing={2} shouldWrapChildren>
              <NumberInput size='sm' maxW={150}>
                <NumberInputField placeholder='Home Score' name='homeScore'/>
              </NumberInput>
              <NumberInput size='sm' maxW={1250}>
                <NumberInputField placeholder='Away Score' name='awayScore'/>
              </NumberInput>
            </Stack>
            <Stack direction='row' spacing={4} mt={10} justify="center">
              <Input placeholder='Example: 01-8-2023'
                     name='timestamp'/>
              <Select placeholder='Select Match Type' name='type'>
                <option value='League'>League</option>
                <option value='Cup'>Cup</option>
                <option value='Friendly'>Friendly</option>
              </Select>
              <Input placeholder='Example: Round 1, Preparation'
                     name='stage' />
            </Stack>
          </>
        </FormStep>
        <FormStep label="Preview"></FormStep>
        <FormStep label="Check it"></FormStep>
      </MatchForm>
    </>
  )
}

const MatchPopup: FC<MatchPopupProps> = ({onClose}) => {

  const dispatch = useDispatch<AppDispatch>()

  const {players} = useSelector(playersSelector)

  const form = useMatch()

  const handleSubmit = async (e: matchDataType) => {
    dispatch(saveMatchPerformanceThunk({data: e}))
      .then(() => onClose())
  }

  return (
    <Popup onClose={onClose}>
      <div className='p-4'>
        <div className='py-8'>
          <h1 className='border-b pb-2 text-2xl uppercase text-center font-semibold'>Add new match statistics</h1>
        </div>
        <CheckIt />
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Wizard>
            <InitialStep />
            <OffensiveStats players={players} />
            <DistributionStats players={players} />
            <DefensiveStats players={players} />
            <GoalkeeperStats players={players} />
            <PhysicalData players={players} />
            <ConfirmSubmission />
          </Wizard>
        </form>
      </div>
    </Popup>
  )
}

export const MatchPopupPortal: FC<MatchPopupProps> = ({onClose}) => {
  const container = document.body

  return ReactDOM.createPortal(<MatchPopup onClose={onClose}/>, container)
}
