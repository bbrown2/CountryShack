import styled from 'styled-components';
import { Container, device } from '../globalStyles';

export const HeroContainer = styled(Container)`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;


    //--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
		flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 300px;

	}
`;
