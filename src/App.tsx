import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/Home'
import { DesignSystem } from './pages/design-Systeme/DesignSystem'
import { Warcraft } from './pages/Warcraft/Warcraft'
import { CallOfDuty } from './pages/CallOfDuty/CallOfDuty'
import { Diablo } from './pages/Diablo/Diablo'
import { Overwatch } from './pages/Overwatch/Overwatch'
import { StarCraft } from './pages/StarCraft/StarCraft'
import { Plus } from './pages/Plus/Plus'
import { HeroBarre } from './components/HeroBarre/HeroBarre'
import { Footer } from './components/Footer/Footer'
import { HeroBanner } from './components/HeroBanner/HeroBanner'


function App() {
 

  return (
    <div className='bg-background-900'>
    <BrowserRouter>
    <HeroBanner/>
    <HeroBarre/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/warcraft' element={<Warcraft/>} />
      <Route path='/call/of/duty' element={<CallOfDuty/>} />
      <Route path='/diablo' element={<Diablo/>} />
      <Route path='/overwatch' element={<Overwatch/>} />
      <Route path='/starcraft' element={<StarCraft/>} />
      <Route path='/plus' element={<Plus/>} />
      <Route path='/design/system' element={<DesignSystem/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
