import { Toaster } from 'sonner';

import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Toaster
          toastOptions={{
            style: {
              color: '#35383E',
            },
          }}
        />
        <Sidebar />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
