import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [main, setMain] = useState('cash games');

  return (
    <div className="app">
      <Header setMain={setMain} />
      <Main main={main} />
      <Footer />
      <div className="fixed-btn-container">
        <button className="fixed-btn-container__btn">ითამაშე</button>
      </div>
    </div>
  );
}

export default App;
