import logo from './logo.svg';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import EditPassword from './EditPassword';
import SendEmail from './SendEmail';
import { BrowserRouter, Switch, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} exact />
     <Route path="/signup" element={ <SignUp /> } />
     <Route path="/login" element={ <Login /> } />
     <Route path="/edit" element={ <EditPassword /> } />
     <Route path="/send" element={ <SendEmail /> } />
     {/* <Route path="/list" element={<Mahasiswa />} />
     <Route path="/menu" element={<Menu />} />
     <Route path="/login" element={<Login />} />
     <Route path="/saya" element={<DataSaya />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
