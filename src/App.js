
import './App.css';
import { Header } from './components';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <AllRoutes/>
      </main>
    </div>
  );
}

export default App;
