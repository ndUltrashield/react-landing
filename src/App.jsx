import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Purpose from './components/Purpose'
import Showcase from './components/Showcase'

function App() {
  return (
    <main className='relative overflow-x-hidden min-h-screen'>
      <div className='absolute top-0 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/90 to-blue-200/80 rounded-full blur-2xl -z-10'></div>
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <Showcase />
        <Purpose />
      </div>
    </main>
  )
}

export default App