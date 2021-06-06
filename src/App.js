import React from 'react'
import './App.css'
import TableSection from './Comps/Table/TableSection'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import SingleTableData from './Comps/Table/SingleTableData'


const App = () => {
  return (
<div className="App">
<Router>
       <Switch>
       <Route path="/" exact component={TableSection} />
         <Route path="/table/:tableId" exact component={SingleTableData} /> 
        <Route>Error 404 not found</Route>
       </Switch>
      </Router>
</div>
  )
}

export default App

