import { useEffect } from "react";
import styled from "styled-components";
import { Keywords } from "../../constant";
import usePost from "../../store/PostStore";
import { BREAK_POINT_PHONE } from "../../constant";

const KeywordSelectBtn = ({ data, gap, width }) => {
  const { setKeyWord, keyWord } = usePost();

  useEffect(() => {
    if(data) {
      setKeyWord(data.keyWord);
    }
  },[])

  const handleClick = (e) => {
    if (keyWord.includes(e.target.innerText)) {
      const removeData = keyWord.filter((item) => item !== e.target.innerText);
      setKeyWord(removeData);
      return;
    }
    setKeyWord([...keyWord, e.target.innerText]);
  };

  return (
    <KeywordBtn gap={gap} width={width}>
      <div className="KeywordContainer">
        <ul>
          {Keywords.map((item, idx) => (
            <li
              key={idx}
              onClick={handleClick}
              className={keyWord.includes(item) ? "Active" : "kk"}
            >
              {item}
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
      margin: 0 auto;
      width: ${(props) => props.width || ""};
      gap: ${(props) => props.gap || "24px"};
      padding: 24px;
     
    }
    .Active {
      border: 1px solid #4da772;
      background-color: #4da772;
      color: #ffffff;
    }

    li {
      padding: 10px 15px;
      color: #999999;
      border: 1px solid;
      border-radius: 50px;
      border-color: #999999;
      background-color: #ffffff;
      cursor: pointer;
      transition: all 0.3s;

      @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
       // 여기부터
      }
    }
  }
`;

export default KeywordSelectBtn;
