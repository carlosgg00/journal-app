import { HashRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const JournarlApp = () => {
  return (
    <AppTheme>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </ AppTheme>
  )
}
