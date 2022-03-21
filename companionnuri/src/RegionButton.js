// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function RegionButton(props) {

//     axios.ajax({
//         url: "./grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000",
//         type: "GET",

//         success: function (response) {
//             makeList(response);
//         },
//         error: function (xhr, status, msg) {
//             console.log("error");
//         },
//     });

//     function makeList(data) {
//         // var slist = `<h1>시/군/구</h1>`
//         for (let i = 0; i < data.regcodes.length; i++) {
//             setr(`<h1>${data.regcodes[i].name}</h1>`);
//         }
//     }

//     const [r, setr] = useState('');


//     function click() {
//         props.setRegion("Seoul")
//         props.setData("no")
//     }

//     function click2() {
//         props.setRegion("Busan")
//         props.setData("no")
//     }

//     function click3() {
//         props.setRegion("Daegu")
//         props.setData("no")
//     }

//     return (
//         <div>
//             {r}
//             <button onClick={click}>서울특별시</button>
//             <button onClick={click2}>부산광역시</button>
//             <button onClick={click3}>대구광역시</button>
//             {/* <button onClick={() => props.setRegion("Daejeon")}>대전광역시</button>
//             <button onClick={() => props.setRegion("Gwangju")}>광주광역시</button>
//             <button onClick={() => props.setRegion("Incheon")}>인천광역시</button>
//             <button onClick={() => props.setRegion("Ulsan")}>울산광역시</button> */}
//         </div>
//     );
// }

// export default RegionButton;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegionButton(props) {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    function click() {
        props.setRegion("Seoul")
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
        <button onClick={click}>{user.name}</button>
      ))}
    </div>
  );
}

export default RegionButton;