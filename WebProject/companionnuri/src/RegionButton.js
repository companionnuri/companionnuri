import React, { useState, useEffect } from 'react';
import axios from 'axios';

const regionSidoBtn = {
  display:'block',
  width: '140px',
  fontSize: '20px',
}

function RegionButton(props) {

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   
  const clickHandler = (params) => {
      
    const v = params.target.value;
    props.setRegion(v)
    props.setData("no")
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000'
        );
          setUsers(response.data.regcodes); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <div>
      {users.map(user => (
        <button value={user.name} onClick={(e)=>{clickHandler(e)}} style={regionSidoBtn}>{user.name}</button>
      ))}
    </div>
  );
}

export default RegionButton;