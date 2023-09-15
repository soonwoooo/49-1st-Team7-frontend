import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import JoinDone from './pages/JoinDone/JoinDone';
import Main from './pages/Main/Main';
import Write from './pages/Write/Write';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/joindone" element={<JoinDone />} />
        <Route path="/main" element={<Main />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
