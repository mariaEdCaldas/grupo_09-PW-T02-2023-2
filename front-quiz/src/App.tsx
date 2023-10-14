import './App.scss'
import PageContainer from './components/appContainer/PageContainer'
import Menu from './components/menu/Menu'
import { loggedItems, unloggedItems } from './components/menu/MenuItems'
import Router from './pages/Router'

function App() {


  return (
    <>
      <header>
        <Menu leftMenuItems={loggedItems} rightMenuItems={unloggedItems}/>
      </header>
      <PageContainer>
        <Router/>
      </PageContainer>
    </>
  )
}

export default App
