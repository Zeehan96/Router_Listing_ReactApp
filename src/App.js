import logo from './logo.svg';
import './App.css';

import PostListWithAutoDetail from './components/ListWithDele';
import Navbar from './components/NavBar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <PostListWithAutoDetail/>
    </div>
  );
}

export default App;
