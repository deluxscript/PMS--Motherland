import {FC, PropsWithChildren} from "react"
import classnames from "classnames"
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";

import './Overview.scss'

const nodes = [
  {
    id: "0",
    name: "Operating System",
    deadline: "2020-02-14T23:00:00.000Z",
    type: "SETUP",
    isComplete: true,
    nodes: null,
  },
  {
    id: "1",
    name: "VSCode",
    deadline: "2020-02-16T23:00:00.000Z",
    type: "SETUP",
    isComplete: true,
    nodes: [],
  },
  {
    id: "0",
    name: "Operating System",
    deadline: "2020-02-14T23:00:00.000Z",
    type: "SETUP",
    isComplete: true,
    nodes: null,
  },
  {
    id: "1",
    name: "VSCode",
    deadline: "2020-02-16T23:00:00.000Z",
    type: "SETUP",
    isComplete: true,
    nodes: [],
  },
  {
    id: "0",
    name: "Operating System",
    deadline: "2020-02-14T23:00:00.000Z",
    type: "SETUP",
    isComplete: true,
    nodes: null,
  },
  {
    id: "1",
    name: "VSCode",
    deadline: "2020-02-16T23:00:00.000Z",
    type: "SETUP",
    isComplete: true,
    nodes: [],
  },
  {
    id: "0",
    name: "Operating System",
    deadline: "2020-02-14T23:00:00.000Z",
    type: "SETUP",
    isComplete: true,
    nodes: null,
  },
  {
    id: "1",
    name: "VSCode",
    deadline: "2020-02-16T23:00:00.000Z",
    type: "SETUP",
    isComplete: true,
    nodes: [],
  }
]

export const Overview = () => {
  const data = {nodes}
  return (
    <div className='overview'>
      <Table data={data} layout={{fixedHeader: true}} className='overview__table'>
        {(nodes:any) => (
          <>
            <Header className='overview__table-header'>
              <HeaderRow className='overview__table-header--row'>
                <HeaderCell className='overview__table-header--row-item'>Name</HeaderCell>
                <HeaderCell className='overview__table-header--row-item'>Position</HeaderCell>
                <HeaderCell className='overview__table-header--row-item'>Age</HeaderCell>
                <HeaderCell className='overview__table-header--row-item'>Nat</HeaderCell>
                <HeaderCell className='overview__table-header--row-item'>Phone</HeaderCell>
                <HeaderCell className='overview__table-header--row-item'>Email Address</HeaderCell>
                <HeaderCell className='overview__table-header--row-item'>Address</HeaderCell>
              </HeaderRow>
            </Header>

            <Body className='overview__table-body'>
              {nodes.map((item:any) => (
                <Row className='overview__table-body--row' key={item.id} item={item}>
                  <Cell className='overview__table-body--row-item'>{item.name}</Cell>
                  <Cell className='overview__table-body--row-item'>
                    1
                  </Cell>
                  <Cell className='overview__table-body--row-item'>{item.type}</Cell>
                  <Cell className='overview__table-body--row-item'>{item.isComplete.toString()}</Cell>
                  <Cell className='overview__table-body--row-item'>{item.nodes ? item.nodes.length : "nnnn"}</Cell>
                  <Cell className='overview__table-body--row-item'>{item.nodes ? item.nodes.length : "nnnn"}</Cell>
                  <Cell className='overview__table-body--row-item'>{item.nodes ? item.nodes.length : "nnnn"}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </div>
  )
}
