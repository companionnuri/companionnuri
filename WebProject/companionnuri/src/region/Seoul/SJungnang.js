import React, { useState, useEffect } from 'react';
import axios from 'axios';

const loadingMessage = {
  color: 'rgb(95, 39, 205)',
  fontSize:'38px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height:'500px',
}
function SJungnang(props) {

  const clickHandler = (params) => {
    const v = params.target.value;
    props.setinputValue(v)
  }

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=1126*&is_ignore_zero=true'
        );
          setUsers(response.data.regcodes); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div><p style={loadingMessage}><i class="fa-solid fa-spinner"></i></p></div>;
  if (error) return <div><p style={loadingMessage}><i class="fa-solid fa-triangle-exclamation"></i></p></div>;
  if (!users) return null;
  return (
    <div>
      {users.map(user => (
        <button value={user.name} onClick={(e)=>{clickHandler(e)}}>{user.name}</button>
      ))}
    </div>
  );
}

export default SJungnang;