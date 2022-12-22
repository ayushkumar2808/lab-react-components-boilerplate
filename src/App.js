import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header.js';
import ShowImage from './components/Main.js'
import ImageData from './components/Imagedata.js'


function App() {
  return (
    <div>
   <Header/>
      <ShowImage data={ImageData}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;
