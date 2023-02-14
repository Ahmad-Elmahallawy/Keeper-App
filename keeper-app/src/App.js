import Header from './Components/Header'
import Footer from './Components/Footer'
import {listOfNotes} from './Components/Note'
function App() {
  return (
    <div className="App">
      <Header/>
      {listOfNotes}
      <Footer/>
    </div>
  );
}

export default App;
