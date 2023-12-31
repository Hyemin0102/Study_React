import { useEffect, useState } from "react";

//usePromise의 의존배열을 deps라는 파라미터로 받아올때 Eslint 경고 발생
const usePromise = (promiseCreator, deps) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const process = async () =>{
      setLoading(true);
      try{
        const resolved = await promiseCreator();
        setResolved(resolved);
      }catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  },deps);

  return [loading,resolved,error ];
};

export default usePromise; 