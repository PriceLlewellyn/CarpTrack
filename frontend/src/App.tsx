
import './App.css'
import Grid from './components/grid/grid.js'
import LeftBar from './components/leftBar/leftBar.js'
import TopBar from './components/topBar/topBar.js'


const App = () => {
  return (
    <div className='app'>
      <LeftBar/>
      <div className='content'>
        <TopBar/>
        <Grid/>
      </div>
    </div>
  )
}

export default App
