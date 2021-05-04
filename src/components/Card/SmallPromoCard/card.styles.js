import styled from 'styled-components';
import { Container, device } from '../../globalStyles';

export const CardContainer = styled(Container)`

    max-width: 600px;
    width: 100%;
    height: 200px;
    padding: 0;

    //--------> MEDIA QUERIES <--------
	@media ${device.tablet} {
        height: 300px;
	}
`;
