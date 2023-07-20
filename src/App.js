
import './App.css';


import Navbar from './component/Navbar';

 import Textform from './component/Textform';

function App() {
  return (
    <div>
    <Navbar title="textUtils" about="About us"/>
    <div className="container my-3" >
    <Textform heading="Enter The Text"/> 
    
    </div>
</div>

  );
}

export default App;
