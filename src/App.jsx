import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
