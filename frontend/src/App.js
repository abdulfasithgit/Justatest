import './App.css'
import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom'
import { Container } from 'react-bootstrap'
//components
import Header from './components/Header'
//screens
import HomeScreen from './screens/HomeScreen'
import IndividualReportScreen from './screens/IndividualReportScreen'
import ReportScreen from './screens/ReportScreen'
import LoginScreen from './screens/LoginScreen';

function App () {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route path='/reports' component={ReportScreen} exact />
            <Route path='/reports/:id' component={IndividualReportScreen} exact />
            <Route path="/login" component={LoginScreen} exact/>
            <Route path='/' component={HomeScreen} exact />
            <Redirect to="/" />
          </Switch>
        </Container>
      </main>
    </Router>
  )
}

export default App
