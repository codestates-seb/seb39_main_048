import styled from "styled-components";
import { Keywords } from "../../constant";

const KeywordActive = () => {};

const KeywordSelectBtn = () => {
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
