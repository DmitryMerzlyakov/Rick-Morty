import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "../router"
import { store } from "../store/store"

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}