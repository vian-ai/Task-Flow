import Header from './Components/Header';
import Create from './Components/Create';
import Tasks from './Components/Tasks';
import './Styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Create />
      <Tasks />
    </div>
  );
}

export default App;
