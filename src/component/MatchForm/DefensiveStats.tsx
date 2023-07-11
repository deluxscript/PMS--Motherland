import {FC} from "react"
import {Button, NumberInput, NumberInputField, Stack} from '@chakra-ui/react'
import {useWizard} from 'react-use-wizard'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import {useMatch} from "../../hooks/useMatch"
import {PlayersProfile} from "../../api"
import { DefensiveStatsItems } from "../../config/constants"

import './Form.css'

type DefensiveStatsProps = {
  players: PlayersProfile[] | undefined
}
export const DefensiveStats: FC<DefensiveStatsProps> = ({players}) => {

  const {previousStep, nextStep} = useWizard()
  const {register} = useMatch()

  return <>
    <div className='text-md font-bold text-center uppercase pb-3'>Defensive Stats</div>
    <TableContainer>
      <Table variant='simple' size='sm'>
        <Thead>
          <Tr>
            <Th>Players</Th>
            <Th>Data</Th>
          </Tr>
        </Thead>
        <Tbody>
          {players && players.map(player => <Tr key={player.id}>
            <Td position='sticky' left={0} zIndex={1} backgroundColor='#040404'
                color='#a0a0a0'>{player.name}</Td>
            <Td>
              <Stack direction='row' spacing={2}>
                {DefensiveStatsItems.map(item =>
                  <NumberInput key={item.name}>
                    <NumberInputField placeholder={item.placeholder}
                      minWidth={150} {...register(`stats.${[player.id]}.distributionStats.${item.name}`)}/>
                  </NumberInput>)}
              </Stack>
            </Td>
          </Tr>)}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Players</Th>
            <Th>Data</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
    <Stack direction="row" spacing={4} mt={10}>
      <Button type="submit">Save</Button>
      <Button onClick={previousStep}>Previous</Button>
      <Button onClick={nextStep}>Next</Button>
    </Stack>
  </>
}
