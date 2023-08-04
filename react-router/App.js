
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Mypage from './pages/Mypage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />}/>
      <Route path="/mypage" element={<Mypage />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}
//"*" - 아무 텍스트나 매칭,일치하는 라우트가 없는 경우 이 페이지가 보여짐

export default App;
/* 
  index props는 상위 라우트의 경로와 일치하고 경로가 주어지지 않았을 때 보여지는 라우트 설정 할 수 있다.
  path="/"와 동일한 역할이지만 좀 더 명시적으로 표현함.
*/
