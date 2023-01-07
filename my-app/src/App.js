import './App.css';
import {User} from './component/User'
import {User2} from './component/User2'
import User3 from './component/User3'
function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello World</h1>
        <User />
        <User2 />
        <User3 />
      </div>
    </div>
  );
}

export default App;
