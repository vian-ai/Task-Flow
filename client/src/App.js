import Header from './Components/Header';
import Create from './Components/Create';
import Tasks from './Components/Tasks';
import './Styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className='task-flow'>
        <Header />
        <Create />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
