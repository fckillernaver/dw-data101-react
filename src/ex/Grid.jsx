import React from "react";
import "./Grid.css";
import "./Grid_T.css";
import "./Grid_D.css";

const Grid = () => {
  return (
    <ul id="grid">
      <li>
        <a href="">자주 묻는 질문</a>
      </li>
      <li>
        <a href="">고객 센터</a>
      </li>
      <li>
        <a href="">계정</a>
      </li>
      <li>
        <a href="">미디어 센터</a>
      </li>
      <li>
        <a href="">투자 정보</a>
      </li>
      <li>
        <a href="">입사 정보</a>
      </li>
      <li>
        <a href="">넷플릭스 지원 디바이스</a>
      </li>
      <li>
        <a href="">이용 약관</a>
      </li>
      <li>
        <a href="">개인정보 처리방침</a>
      </li>
      <li>
        <a href="">쿠키 설정</a>
      </li>
      <li>
        <a href="">회사 정보</a>
      </li>
      <li>
        <a href="">문의하기</a>
      </li>
      <li>
        <a href="">속도 테스트</a>
      </li>
      <li>
        <a href="">법적 고지</a>
      </li>
      <li>
        <a href="">오직 넷플릭스에서</a>
      </li>
    </ul>
  );
};

// {items.map((item, i) => {
//   return (
//     <li key={i}>
//       <a href="">{item}</a>
//     </li>
//   );
// })}
export default Grid;

// Array => 배열
const items = [
  "자주 묻는 질문",
  "고객 센터",
  "계정",
  "미디어 센터",
  "투자 정보",
  "입사 정보",
  "넷플릭스 지원 디바이스",
  "이용 약관",
  "개인정보 처리방침",
  "쿠키 설정",
  "회사 정보",
  "문의하기",
  "속도 테스트",
  "법적 고지",
  "오직 넷플릭스에서",
];
