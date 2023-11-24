/* eslint-disable react/prop-types */
import styled from 'styled-components';

const BigBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const PListBox = styled.div`
  color: white;
  justify-content: flex-start;
  width: 250px;
  border: 1px solid transparent;
  box-shadow: 5px 5px 10px darkgray;
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => {
        switch (props.type) {
            case '글로벌리더십':
                return '#CF0000';
            case '국제어문':
                return '#5D43FF';
            case '경영경제':
                return '#8F50DF';
            case '법':
                return '#7927E1';
            case '커뮤니케이션':
                return '#00CFDD';
            case '공간환경시스템':
                return '#00A0FF';
            case '기계제어':
                return '#33C300';
            case '상담심리사회복지':
                return '#FFB800';
            case '생명과학':
                return '#FF5F00';
            case '전산전자':
                return '#D800DD';
            case 'ICT창업':
                return '#FF258C';
            case '콘텐츠융합디자인':
                return '#BDFF00';
            default:
                return 'gray';
        }
    }};
`
const StarBox = styled.div`
  flex-direction: column;
`
const ListName = styled.div`
  font-weight: bolder;
  font-size: large;
`

const HomeProblem = ({ problem }) => (
    <div className="Problem">
        <h4>{problem.length} 개의 소원이 있습니다</h4>
        <BigBox>
            {problem.map((it) => (
                <PListBox key={it.id} type={it.type}>
                    <StarBox>
                        <ListName>{it.text}</ListName>
                        <ListName>by {it.nickname}</ListName>
                    </StarBox>
                </PListBox>
            ))}
        </BigBox>
    </div>
);

HomeProblem.defaultProps = {
    problem: [],
};

export default HomeProblem;
