import {FC} from "react"
import {
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import {PlayersProfile} from "../../api"
import { DistributionStatsItems } from "../../config/constants"

import './Form.css'
import {Field} from "formik";

type DistributionStatsProps = {
  players: PlayersProfile[] | undefined
}
export const DistributionStats: FC<DistributionStatsProps> = ({players}) => {

  return <>
    <TableContainer>
      <Table variant='simple' size='sm'>
        <Thead>
          <Tr>
            <Th>Players</Th>
            <Th>
              <Stack direction='row' spacing={2}>
                {DistributionStatsItems.map(item =>
                  <div key={item.placeholder}
                       className='min-w-150 w-190 px-2 text-small border-r py-2 text-center'>{item.placeholder}</div>)
                }
              </Stack>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {players && players.map(player => <Tr key={player.id}>
            <Td position='sticky' left={0} zIndex={1} backgroundColor='#040404'
                color='#a0a0a0'>{player.name}</Td>
            <Td>
              <Stack direction='row' spacing={2}>
                {DistributionStatsItems.map(item =>
                  <Field
                    key={item.name}
                    name={`stats[${player.id}].distributionStats.${item.name}`}
                    placeholder={item.placeholder}
                    type='number'
                    className='min-w-150 h-10 px-4 border rounded outline-0'
                  />)}
              </Stack>
            </Td>
          </Tr>)}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Players</Th>
            <Th>
              <Stack direction='row' spacing={2}>
                {DistributionStatsItems.map(item =>
                  <div key={item.placeholder}
                       className='min-w-150 w-190 px-2 text-small border-r py-2 text-center'>{item.placeholder}</div>)
                }
              </Stack>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  </>
}
