import './App.css';
import Sidebar from './components/Sidebar';
import Maincontent from './components/Maincontent';

function App() {
  return (
   <> 
   <div className='flex'>

      <Sidebar />
      <Maincontent />
   </div>
    
   </>
  );
}

export default App;
