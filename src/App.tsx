import { Route } from 'react-router-dom';
import CvCreateList from './components/CvCreateStepList';

function App() {
  return (
    <main>
      <Route path='/'>
        <CvCreateList />
      </Route>
    </main>
  );
}


export default App;
