import './App.css'
import HomePage from './components/page/homepage/homepage.component'
import ShopPage from './components/page/shoppage/shoppage.component'
import { Route, Switch } from 'react-router-dom'
import Header from './components/component/header/header.component'


function App() {
  return (
     <div>
        <Header/>
        <Switch>
           <Route exact path='/' component={HomePage} />
           <Route exact path ='/shop' component = {ShopPage} />
        </Switch>
     </div>
  )
}

export default App;
