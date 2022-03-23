function Gwangju(props) {
    return (
      <div>
        <button onClick={() => props.setData("qnrrn")}>광산구</button>
        <button onClick={() => props.setData("qnrrn")}>남구</button>
        <button onClick={() => props.setData("qnrrn")}>동구</button>
        <button onClick={() => props.setData("qnrrn")}>북구</button>
        <button onClick={() => props.setData("qnrrn")}>서구</button>
    </div>
  );
}

export default Gwangju;
