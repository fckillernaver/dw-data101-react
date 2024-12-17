import React from "react";
import "./FAQ.css";
import { AiOutlinePlus } from "react-icons/ai";

const nqs = [
  { q: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?", a: "loream" },
  { q: "넷플릭스란 무엇인가요?" },
  { q: "넷플릭스 요금은 얼마인가요?" },
  { q: "어디에서 시청할 수 있나요?" },
  { q: "멤버십을 해지하려면 어떻게 하나요?" },
  { q: "아이들이 넷플릭스를 봐도 좋을까요?" },
];
const title = "자주 묻는 질문";

const FAQ = () => {
  return (
    <div className="faq">
      <h3>{title}</h3>

      <ul>
        {nqs.map((q, i) => {
          return (
            <li key={i}>
              <button>
                {q.q}
                <span>+</span>
              </button>

              {q.a && (
                <div>
                  <p>{q.a}</p>
                  <a href="">ㄱㄱㅅ</a>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;

{
  /* <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              accusamus labore tempore impedit asperiores animi sit unde fuga,
              quia aliquam modi dolores corporis at debitis amet. Sed earum
              error nesciunt?
            </p>
            <a href="">넷플릭스 콘텐츠를 한 번 살펴보세요.</a>
          </div> */
}
