import React from 'react';
import { PositionWrapper } from '../../App';
import TextContent from '../TextContent/TextContent';
import content from './content';

const MainPage = () => {

	return (
		<PositionWrapper>
			<TextContent content={ content.ru }/>
		</PositionWrapper>
	);
};

export default MainPage;