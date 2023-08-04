import { useLocation, useSearchParams } from "react-router-dom";

const About = () =>{
  //useSearchParams 훅 사용해 현재 페이지 쿼리 파라미터 관리-현재 페이지의 쿼리 파라미터를 다루기 위한 객체와 함수 반환
  //searchParams 현재 패이지의 쿼리 파라미터 나타냄
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams',searchParams);

  //detail, mode 변수는 searchParams객체에서 detail, mode 값을 추출함
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  //searchParams에 mode, detail변수를 할당하는데 detail의 불리언 값을 반전시킴
  const onToggleDetail = () =>{
    setSearchParams({mode, detail: detail === 'true'? false : true});
  };

  //searchParams에 mode, detail변수를 할당하는데 mode는 nextmode로 넣어줌
  const onIncreaseMode = () =>{
    const nextMode = mode === null ? 1 :parseInt(mode) + 1;
    setSearchParams({mode: nextMode, detail })
  }
  return(
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해보는 프로젝트</p>
      <p>detail:{detail}</p>
      <p>mode:{mode}</p>
      <button onClick={onToggleDetail}>Toggle Detail</button>
      <button onClick={onIncreaseMode}>mode +1</button>
    </div>
  )
};
/*
  주의사항 - 
    쿼리파라미터 조회할 때 무조건 문자열 타입이라 문자는 '' 따옴표로 감싸야하고, 숫자는 parseInt()사용해 숫자타입을 문자열로 변환해야함
*/
export default About;

/* const About = () =>{
  return(
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해보는 프로젝트</p>
    </div>
  )
};

export default About; */