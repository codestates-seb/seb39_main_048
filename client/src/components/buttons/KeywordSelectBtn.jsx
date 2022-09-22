import styled from "styled-components";

const KeywordActive = () => {};

const KeywordSelectBtn = () => {
  const Keywords = [
    "주차장",
    "무선인터넷",
    "예약가능",
    "실외만 가능",
    "배변봉투",
    "압마개 필수",
    "리드줄 착용",
    "중성화 필수",
    "호텔링",
    "데이케어",
  ];

  return (
    <KeywordBtn>
      <div className="KeywordContainer">
        <ul>
          {Keywords.map((keyword, idx) => (
            <li key={idx} onClick={KeywordActive}>
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </KeywordBtn>
  );
};

const KeywordBtn = styled.div`
  .KeywordContainer {
    border: 1px solid;
    border-radius: 10px;
    border-color: #d7e2eb;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      font-size: 12px;
      font-weight: 350;
      gap: 24px;
      padding: 24px;
    }

    li {
      padding: 10px 15px;
      color: #999999;
      border: 1px solid;
      border-radius: 50px;
      border-color: #999999;
      background-color: #ffffff;
      cursor: pointer;
    }
  }
`;

export default KeywordSelectBtn;
