import {FC} from "react"

type Item = {
  [key: string]: string | number
}

type Column = {
  id: string
  title: string
}
type TableProps = {
  columns: Column[]
  data: Item[]

}

export const Table: FC<TableProps> = ({columns, data}) => {
  return (
    <table className="shadow-sm bg-white m-auto">
      <thead>
      <tr>
        {columns.map(column => <th key={column.id}
          className='bg-blackColor border text-center font-normal text-sm px-2.5 py-1.5 text-white'>{column.title}</th>)}
      </tr>
      </thead>
      <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map(column => <td key={column.id} className='border px-8 py-4'>
            {column.id === 'imageurl' ?
              <img src={row[column.id].toString()} width={50}/> : row[column.id]}
          </td>)}
        </tr>
      ))}
      </tbody>
    </table>
  )
}
