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
  background-color: #FA5858;
  border: 1px solid transparent;
  box-shadow: 5px 5px 10px darkgray;
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
`
const StarBox = styled.div`
  flex-direction: column;
`
const ListName = styled.div`
  font-weight: bolder;
  font-size: large;
`

const Problem = ({ problem }) => (
    <div className="Problem">
        <h4>{problem.length} 개의 소원이 있습니다</h4>
        <BigBox>
            {problem.map((it) => (
                <PListBox key={it.id}>
                    <StarBox>
                        <ListName>{it.text}</ListName>
                        <ListName>by {it.nickname}</ListName>
                    </StarBox>
                </PListBox>
            ))}
        </BigBox>
    </div>
);

Problem.defaultProps = {
    problem: [],
};

export default Problem;
