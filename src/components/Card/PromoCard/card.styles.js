import styled from 'styled-components';
import { Container, device } from '../../globalStyles';

export const CardContainer = styled(Container)`
    height: 200px;
    margin: 100px auto;

    //--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
        height: 300px;
	}
`;
