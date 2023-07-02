import {FC} from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const data = [
  {
    playerName: 'Okocha',
    OnTgt: 4,
    OffTgt: 9
  },
  {
    playerName: 'Berbatov',
    OnTgt: 3,
    OffTgt: 1
  },
  {
    playerName: 'Ronaldos',
    OnTgt: 2,
    OffTgt: 7
  },
  {
    playerName: 'Hazard',
    OnTgt: 3,
    OffTgt: 3
  },
  {
    playerName: 'Pogba',
    OnTgt: 4,
    OffTgt: 1
  },
]

const data2 = [
  {
    playerName: 'Terry',
    Tkl: 14,
    Int: 19
  },
  {
    playerName: 'John',
    Tkl: 31,
    Int: 11
  },
  {
    playerName: 'Azpi',
    Tkl: 12,
    Int: 17
  },
  {
    playerName: 'Alex',
    Tkl: 13,
    Int: 30
  },
  {
    playerName: 'Dariot',
    Tkl: 24,
    Int: 11
  },
]

export const Home: FC = () => {

  return (
    <div className='grid grid-cols-2 gap-4 py-4'>
      <div>
        <div className='text-center mb-4'>Top Scorers</div>
        <table className="shadow-sm bg-white m-auto">
          <thead>
          <tr>
            <th className='bg-blackColor border text-left px-8 py-4 text-white'>Player</th>
            <th className='bg-blackColor border text-left px-8 py-4 text-white'>Position</th>
            <th className='bg-blackColor border text-left px-8 py-4 text-white'>Goals</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className='border px-8 py-4'>Aribisala</td>
            <td className='border px-8 py-4'>MF</td>
            <td className='border px-8 py-4'>2</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Witchy Woman</td>
            <td className='border px-8 py-4'>CB</td>
            <td className='border px-8 py-4'>3</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Shining Star</td>
            <td className='border px-8 py-4'>F</td>
            <td className='border px-8 py-4'>5</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Ahmed</td>
            <td className='border px-8 py-4'>F</td>
            <td className='border px-8 py-4'>9</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Christian</td>
            <td className='border px-8 py-4'>MF</td>
            <td className='border px-8 py-4'>2</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className='text-center mb-4'>Top Assist</div>
        <table className="shadow-sm bg-white m-auto">
          <thead>
          <tr>
            <th className='bg-blackColor border text-left px-8 py-4 text-white'>Player</th>
            <th className='bg-blackColor border text-left px-8 py-4 text-white'>Position</th>
            <th className='bg-blackColor border text-left px-8 py-4 text-white'>Assists</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className='border px-8 py-4'>Gideon</td>
            <td className='border px-8 py-4'>MF</td>
            <td className='border px-8 py-4'>5</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Ricci</td>
            <td className='border px-8 py-4'>MF</td>
            <td className='border px-8 py-4'>3</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Star</td>
            <td className='border px-8 py-4'>F</td>
            <td className='border px-8 py-4'>2</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Ahmed</td>
            <td className='border px-8 py-4'>F</td>
            <td className='border px-8 py-4'>2</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Christian</td>
            <td className='border px-8 py-4'>MF</td>
            <td className='border px-8 py-4'>5</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className='text-center mb-4'>Top Shot Performers</div>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4"/>
          <XAxis dataKey="playerName"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey="OnTgt" fill="rgba(241, 164, 29, 1)"/>
          <Bar dataKey="OffTgt" fill="#040404"/>
        </BarChart>
      </div>
      <div>
        <div className='text-center mb-4'>Top Defensive Performers</div>
        <BarChart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4"/>
          <XAxis dataKey="playerName"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey="Tkl" fill="rgba(241, 164, 29, 1)"/>
          <Bar dataKey="Int" fill="#040404"/>
        </BarChart>
      </div>
    </div>
  )
}
