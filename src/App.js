
import './App.css';
import saitama from './assets/saitama.png';
import fubuki from './assets/fubuki.png';
import genos from './assets/genos.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <div><h1>Memory Card Game</h1></div>
          <div>
            <div>Score: 0</div>
            <div>Best score: 0</div>
          </div>
        </div>
      </header>

      <main className='main'>
        <div className='card-container'>
          <div className="card">
            <img src={fubuki} alt="Fubuki" />
            <div className="container">
              <h2><b>Fubuki</b></h2>
            </div>
          </div>

          <div className="card">
            <img src={saitama} alt="Saitama" />
            <div className="container">
              <h2><b>Saitama</b></h2>
            </div>
          </div>

          <div className="card">
            <img src={genos} alt="Genos" />
            <div className="container">
              <h2><b>Genos</b></h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
