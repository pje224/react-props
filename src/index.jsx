import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ComplexProps, ConditionalProps, DefaultProps, PropsExample } from "./PropsExample";
import { Card } from "./Card";
import { ModalEx } from "./components/ModalEx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <div style={{ display: "flex", gap: "10px" }}>
      <PropsExample />
      <DefaultProps />
      <ConditionalProps />
      <ComplexProps />
      <div style={{ display: "flex", flexDirection:"column", gap: "10px" }}>
        <Card
          title="고양이 카드"
          imgUrl="https://picsum.photos/200"
          tags={["귀여움", "동물", "인기"]}
          highlight={true}
          style={{ border: "2px solid orange", padding: "10px", borderRadius: "10px" }}
        />
        <Card
          title="강아지 카드"
          imgUrl="https://picsum.photos/300"
          tags={["귀여움", "동물", "인기"]}
          highlight={true}
          style={{ border: "2px solid skyblue", padding: "10px", borderRadius: "10px" }}
        />
      </div>
    </div>
    <hr />
    <div>
      <ModalEx />
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
