// packages
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '../theme';
import { Box, Flex } from '../components/layout';
import { Breadcrumb, Stepper } from '../components/navigation';
import { Checkbox, CheckboxGroup } from '../components/toggle';

const DemoApp: React.FC = () => {
	return (
		<BrowserRouter>
			{/*<Routes>
      </Routes>*/}
			<ThemeProvider>
				<div>
					<h1>Demo</h1>
					<Checkbox label='Check 1' />
					<CheckboxGroup name='check'>
						<Checkbox label='Check 1' />
						<Checkbox label='Check 2' />
					</CheckboxGroup>
					<Breadcrumb>
						<Breadcrumb.Item link='/link1'>Link 1</Breadcrumb.Item>
						<Breadcrumb.Item link='/link2'>Link 2</Breadcrumb.Item>
						<Breadcrumb.Item>Link 3</Breadcrumb.Item>
					</Breadcrumb>
					<Stepper activeStep={1} steps={['hi', 'hi2']}>
						<Stepper.Item onClick={() => alert('hi')} />
						<Stepper.Item onClick={() => alert('hi2')} />
					</Stepper>
					<Flex className='l-flex' direction='column' w='100%' h='50%'>
						<Box w='48px' h='48px'>Hi</Box>
						<Box w='48px' h='48px'>Hi</Box>
						<Box w='48px' h='48px'>Hi</Box>
						Hi
					</Flex>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default DemoApp;