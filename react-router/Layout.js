import { Outlet, useNavigate, useParams } from "react-router-dom";


const Layout = () =>{
  const navigate=useNavigate();
  
  const goBack = () =>{
    navigate(-1);
  };

  const goArticles = ()=>{
    navigate('/articles',{replace:true})
  };

  return(
    <div>
      <header style={{background:'lightblue', padding:16, fontSize:24}}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 보기</button>
      </header>
      <main>
        <Outlet />
        {/* 각 컴포넌트가 보여져야 하는 부분에 Outlet 사용 */}
      </main>
    </div>
  )
};

export default Layout;