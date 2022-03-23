function Daejeon(props) {
    return (
      <div>
        <button onClick={() => props.setData("qnrrn")}>대덕구</button>
        <button onClick={() => props.setData("qnrrn")}>동구</button>
        <button onClick={() => props.setData("qnrrn")}>서구</button>
        <button onClick={() => props.setData("qnrrn")}>유성구</button>
        <button onClick={() => props.setData("qnrrn")}>중구</button>
    </div>
  );
}

export default Daejeon;
