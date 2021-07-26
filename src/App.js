

import Header from './components/Header';
import Footer from './components/Footer';
import CounterControls from './components/CounterControls';
import './styles.css'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <CounterControls />
      </main>
      <Footer />
    </>
  )
}

export default App;
