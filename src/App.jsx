import { useState } from 'react'
import Header from './Components/Header'
import Products from './Components/Products'
import Forms from './Components/Forms'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div className='overflow-hidden h-max'>
        <Header />
        <div className='flex p-20 gap-48'>
          <Products />
          <Forms />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App;
