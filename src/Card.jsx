export function Card({ title, imgUrl, tags, highlight, style }) {
  return (
    <div style={style}>
      <h2 style={{ color: highlight ? "orange" : "black" }}>{title}</h2>
      <img src={imgUrl} alt="이미지" style={{ width: "100px", height: "100px" }} />
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{"#".repeat(index + 1)}{tag}</li>
        ))}
      </ul>
    </div>
  );
}
