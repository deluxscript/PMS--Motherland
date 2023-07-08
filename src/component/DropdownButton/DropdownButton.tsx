import React, {FC, useEffect, useState} from 'react'
import classnames from "classnames"
import {useAppDispatch} from "../../store/types";
import {setModeStatus} from "../../store/slices/SettingsSlice";

type SelectButtonProps = {
  options: string[]
  classNames?: string
  addAction?: boolean
  title?: string
  instanceId: string
  disabled?: boolean
}

export const DropdownButton:FC<SelectButtonProps> = ({options, classNames, addAction,
title, instanceId, disabled}) => {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const onSelectOption = async (val: string) => {
    await setSelectedOption(val)
    setIsOpen(false)
  }

  useEffect(() => {
    dispatch(setModeStatus({selectedOption, instanceId}))
  }, [selectedOption])

  return (
    <div className={classnames(`relative ${classNames}` )}>
      <button
        className={classnames('text-white bg-yellowColor rounded-t-lg text-sm px-5 py-2.5 text-center inline-flex items-center',
          {'cursor-not-allowed bg-amber-300': disabled})}
        type="button"
        onClick={handleButtonClick}
        disabled={disabled}
      >
        {addAction ? title : selectedOption}
        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {isOpen &&
        <div className="z-10 bg-white text-blackColor absolute inset-x-0 top-full w-full divide-y divide-gray-100 rounded-b-lg shadow">
          <ul className="text-sm">
            {options.map(option => (
              <button
                onClick={() => onSelectOption(option)}
                key={option}
                className="block px-4 py-2 hover:bg-yellowColor dark:hover:text-white w-full"
              >
                {option}
              </button>
            ))}
          </ul>
        </div>
      }
    </div>

)
}
