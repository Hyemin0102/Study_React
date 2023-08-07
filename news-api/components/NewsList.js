import { styled } from "styled-components";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width:768px;
  margin:0 auto;
  margin-top: 2rem;
  @media screen and (max-width:768px){
    width:100%;
    padding-left:1rem;
    padding-right:1rem;
  }
`;

/* const sampleArticel = {
  title:'제목',
  description:'내용',
  url:'https://www.google.com/',
  urlToImage: 'https://via.placeholder.com/160/FFFF00/000000'
} */

const NewsList = ({category}) =>{
  const [aa, setArticles] = useState(null);
  const [loading, setLoading] = useState(false); //로딩 상태
 //console.log('articles',articles)

  useEffect(()=>{
    //useEffect 사용 시 바로 async 사용하면 안돼서 함수 만들어줌
    const fetchData = async() =>{
      setLoading(true);
      try{
        const query = category === 'all' ? '' : `&category=${category}`
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c7a0fb7cf1d543cf9e122c4cad63dcc0`
        );
        setArticles(response.data.articles)
        //response.data 중 articles 이름의 배열의 값을 articles에 할당(useState)
      }catch(e){
        console.log(e)
      };
      setLoading(false);
    };
    fetchData();
  },[category]);

  //대기중일때
  if(loading){
    return <NewsListBlock>대기 중입니다.</NewsListBlock>
  }

  //아직 articles 값이 설정되지 않았을 때
  //이걸 설정 안하면 null일 땐 map 함수에 오류 발생하므로 오류 생김
  if(!aa){
    return null;
  }

  return(
    <NewsListBlock>
      {aa.map(article =>(
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )
};

export default NewsList;