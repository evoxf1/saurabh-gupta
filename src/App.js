import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="w-[1440px] m-auto">
       <BrowserRouter>
         <Main />
       </BrowserRouter>
    </div>
  );
}

export default App;
