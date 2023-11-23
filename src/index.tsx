import * as React from 'react';
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import * as api from './api'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { setupStore } from './store'
import {Login} from "./views/Login/Login"
import {BrowserRouter} from "react-router-dom"

const colors = {
  brand: {
    yellowColor: 'rgba(241, 164, 29, 1)'
  },
}

const theme = extendTheme({colors})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <ChakraProvider theme={theme}>
        <App/>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)

// api.getAuthenticatedUser()
//   .then(async user => {
//     root.render(
//       <React.StrictMode>
//         <Provider store={setupStore()}>
//           <ChakraProvider theme={theme}>
//             <App/>
//           </ChakraProvider>
//         </Provider>
//       </React.StrictMode>
//     )
//   })
//   .catch(e => {
//     root.render(<BrowserRouter><Login /></BrowserRouter>)
//   })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
