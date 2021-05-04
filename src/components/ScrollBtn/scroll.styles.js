import styled from 'styled-components';
import { FaChevronCircleUp } from 'react-icons/fa';
import { Container } from '../globalStyles';

export const ButtonContainter = styled(Container)``;

export const Button = styled(FaChevronCircleUp)`
	height: 35px;
	width: 35px;
    position: fixed; 
    right: 50px;
    bottom: 50px;
    color: var(--colorBlack);
    cursor: pointer;
    display: ${({ $visible }) => ($visible ? 'block' : 'none')}
`;
