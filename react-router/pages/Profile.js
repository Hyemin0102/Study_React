import { useParams } from "react-router-dom";

const data = {
  velopert:{
    name:'조혜민',
    description: '신입 프론트엔드 개발자'
  },
  gildong:{
    name:'홍길동',
    description: '리액트를 좋아하는 개발자'
  }
};

const Profile = () =>{
  //params는 URL에서 추출한 파라미터 값을 담고 있는 객체
  //<Route path="/profiles/:username" element={<Profile />} />
  const params = useParams();
  console.log('params',params)

  //data배열 중 username 찾아서 name, description 가져옴
  const profile = data[params.username];
  console.log('profile',profile)

  return(
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ):(
        <div>존재하지 않는 프로필입니다.</div>
      )}
    </div>
  )
};

export default Profile;