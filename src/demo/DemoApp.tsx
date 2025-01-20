// packages
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '../theme';
import { Box, Center, Container, Divider, Flex, Stack } from '../components/layout';
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
					<hr/>
					<b>STACK</b>
					<Stack gap='4px' divider={<Divider isVertical />}>
						<div>SAS1</div>
						<div>SAS2</div>
						<div>SAS2</div>
						<div>SAS2</div>
					</Stack>
					<hr/>
					<b>DIVIDER</b>
					<Divider />
					<Divider text='Divider text' />
					<Flex>
						Text 1
						<Divider isVertical />
						Text 2
						<Divider isVertical />
						Text 3
					</Flex>
					<hr/>
					<b>CONTAINER</b>
					<Container>
						<Box bg='#e4e4e7'>Container box content</Box>
					</Container>
					<hr/>
					<b>FLEX & CENTER/BOX</b>
					<Flex className='demo-l-flex' display='block' direction='column' w='100%' h='50%'>
						<Center className='demo-c-center' p='8px' w='100px' h='100px' bgColor='salmon' fontColor='white' round='8px'>Centered 1</Center>
						<Box className='demo-c-box' w='48px' h='48px'>Box 2</Box>
						<Box className='demo-c-box' w='48px' h='48px'>Box 3</Box>
					</Flex>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default DemoApp;