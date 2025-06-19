import './App.css'
import Layout from './components/Layout/Layout'
import ChatPageAdmin from './pages/ChatPageAdmin';
import ChatPageUser from './pages/ChatPageUser';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route path="/chatadmin" element={<ChatPageAdmin />} />
      <Route path="/chatuser" element={<ChatPageUser />} />
      <Route path="/*" element={<Layout />} />
    </Routes>
  )
}

export default App
