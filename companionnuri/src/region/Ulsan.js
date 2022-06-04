function Ulsan(props) {
    return (
      <div>
        <button onClick={() => props.setData("qnrrn")}>남구</button>
        <button onClick={() => props.setData("qnrrn")}>동구</button>
        <button onClick={() => props.setData("qnrrn")}>북구</button>
        <button onClick={() => props.setData("qnrrn")}>울주군</button>
        <button onClick={() => props.setData("qnrrn")}>중구</button>
    </div>
  );
}

export default Ulsan;
