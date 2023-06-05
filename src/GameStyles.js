import styled from 'styled-components';
import { FaHandRock, FaHandPaper, FaHandScissors, FaDice } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 150px;
`;

export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ChoiceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: ${(props) => (props.selected ? '#0099FF' : '#00F6B6')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  margin-right: 10px;
  transition: color 0.4s ease;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${(props) => (props.selected ? '#0099FF' : '#9FFFE6')
  };
  transition: color 0.4s ease;
  }
`;

export const HandRockIcon = styled(FaHandRock)`
 
`;

export const HandPaperIcon = styled(FaHandPaper)`

`;

export const HandScissorsIcon = styled(FaHandScissors)`
 transform: scaleX(-1) rotate(90deg);
`;

export const DiceIcon = styled(FaDice)`

`;

export const Button = styled.button`
  padding: 10px 20px;
  width: 400px;
  height: 40px;
  background-color: #FFFF66;
  color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #FFFF99;
  }
`;

export const Result = styled.div`
  margin-top: 20px;
  text-align: center;
  color: ${(props) => (props.selected ? '#000000' : '#000000')};
`;
