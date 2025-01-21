// packages
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RiAncientGateFill, RiAncientGateLine, RiSeedlingFill } from 'react-icons/ri';
import { HiAcademicCap } from 'react-icons/hi2';

import '../styles/index.css';
import '../styles/theme.css';
import '../styles/primitives.css';

import { ThemeProvider } from '../theme';
import { Box, Center, /*Container, Divider, Flex, Stack*/ } from '../components/layout';
import { Divider } from '../components/layout/divider';
import { Container } from '../components/layout/container';
import { Stack } from '../components/layout/stack';
import { Accordion, Avatar, AvatarGroup, AvatarParty, Badge, Breadcrumb, Button, Checkbox, CheckboxGroup, IconButton, Stepper } from '../components/main';

const DemoApp: React.FC = () => {
	return (
		<BrowserRouter>
			{/*<Routes>
      </Routes>*/}
			<ThemeProvider>
				<div className='primitives'>
					<h1>Demo</h1>
					<Checkbox label='Check 1' />
					<CheckboxGroup name='check'>
						<Checkbox label='Check 1' />
						<Checkbox label='Check 2' />
					</CheckboxGroup>
					<hr />
					<b>AVATAR</b>
					<AvatarParty badge={<Badge variant='dot' hasBorder size='M' />}>
						<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='circle'>
						</Avatar>
					</AvatarParty>
					<AvatarParty badge={<Badge variant='dot' hasBorder size='M' />}>
						<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='circle' />
						<Avatar name='Ryan Florence' imgSrc='https://bit.ly/ryan-florence' bdColor='#FF0000' />
					</AvatarParty>
					<AvatarParty badge={<Badge variant='dot' hasBorder size='M' />}>
						<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='circle' />
						<Avatar name='Ryan Florence' imgSrc='https://bit.ly/ryan-florence' bdColor='#FF0000' />
						<Avatar name='Kola Tioluwani' bgColor='#319795' bdColor='#FF5722' />
					</AvatarParty>
					<AvatarParty badge={<Badge variant='dot' hasBorder size='M' />}>
						<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' variant='circle' />
						<Avatar name='Ryan Florence' imgSrc='https://bit.ly/ryan-florence' bdColor='#FF0000' />
						<Avatar name='Kola Tioluwani' bgColor='#319795' bdColor='#FF5722' />
						<Avatar name='Segun Adebayo' imgSrc='https://bit.ly/sage-adebayo' />
					</AvatarParty>
					<AvatarGroup round='full' maxUsers={4} gap='-15px' size='45px' bdWidth='3px'>
						<Avatar name='Dan Abrahmov' imgSrc='https://bit.ly/dan-abramov' round='none' bdWidth='10px' badge={<Badge variant='number' content='NEW' hasBorder size='s' />} />
						<Avatar name='Ryan Florence' imgSrc='https://bit.ly/ryan-florence' bdColor='#FF0000' />
						<Avatar name='Kola Tioluwani' bgColor='#319795' bdColor='#FF5722' />
						<Avatar name='Segun Adebayo' imgSrc='https://bit.ly/sage-adebayo' />
						<Avatar name='Kent Dodds' imgSrc='https://bit.ly/kent-c-dodds' />
						<Avatar name='Prosper Otemuyiwa' imgSrc='https://bit.ly/prosper-baba' />
						<Avatar name='Christian Nwamba' imgSrc='https://bit.ly/code-beast' />
					</AvatarGroup>
					<hr />
					<b>BADGE</b>
					<Badge size='S' hasBorder />
					<Badge variant='number' size='M' content='NEW' hasBorder />
					<Badge variant='number' size='M' content='12390' hasBorder />
					<Badge variant='action' size='M' icon={<HiAcademicCap />} hasBorder />
					<hr />
					<b>ACCORDION</b>
					<Accordion allowMultiple allowToggle hasChevron hasNumber>
						<Accordion.Item>
							<Accordion.Header icon={<RiSeedlingFill />} title='Title1' />
							<Accordion.Content>
								What search is for: discovering new people, stories, characters<br />Can’t search for self, friends? (if, do not display add icon?), blocked<br />Can’t search for own + collaborated stories (favorite stories searchable)<br />Can’t search for own characters (how about characters from collaborated?) (favorite characters searchable)
							</Accordion.Content>
						</Accordion.Item>
						<Accordion.Item>
							<Accordion.Header title='Title2' />
							<Accordion.Content>
								Should there actually be filters?<br />should just show all results based
								on query on all categories:<br />users, stories, characters, chapters,
								content pages<br />ACTUALLY PROBABLY NOT GOING<br />TO BE ABLE TO SEARCH CHAPTERS
								OR CONTENT PAGES - NO ONE<br />WOULD WANT TO READ SOMETHING<br />THEY DONT EVEN KNOW OUT OF THE BLUE
							</Accordion.Content>
						</Accordion.Item>
						<Accordion.Item>
							<Accordion.Header title='Title3' />
							<Accordion.Content>
								ONLY SEARCH FOR ONES WITH VISIBILITY SETTINGS ON<br />first check current user to see if it qualifies query, then loop through each user/story/character for visibility settings, if it is set to private or user is not on visibility list, then dont display it<br />OR really try an advanced query (probably not doable in firebase)
							</Accordion.Content>
						</Accordion.Item>
					</Accordion>
					<hr />
					<b>BREADCRUMB</b>
					<Breadcrumb>
						<Breadcrumb.Item link='/link1'>Link 1</Breadcrumb.Item>
						<Breadcrumb.Item link='/link2'>Link 2</Breadcrumb.Item>
						<Breadcrumb.Item>Link 3</Breadcrumb.Item>
					</Breadcrumb>
					<hr />
					<b>BUTTON</b>
					<IconButton type='action' icon={<HiAcademicCap />} round='full' label='Graduation' hasLabel={false} />
					<IconButton type='toggle' iconOn={<RiAncientGateFill />} iconOff={<RiAncientGateLine />} label='Gate' hasLabel colorScheme='green' />
					<Button variant='solid' colorScheme='green' round='15px' leadingIcon={<HiAcademicCap />} trailingIcon={<HiAcademicCap />}>Hello</Button>
					<Button variant='elevated' colorScheme='green' round='15px' leadingIcon={<HiAcademicCap />} trailingIcon={<HiAcademicCap />}>Hello</Button>
					<Button variant='soft' colorScheme='green' round='15px'>Hello</Button>
					<Button variant='outline' colorScheme='green' round='15px'>Hello</Button>
					<Button variant='ghost' colorScheme='green' round='15px'>Hello</Button>
					<hr />
					<b>STEPPER</b>
					<Stepper activeStep={1} steps={['hi', 'hi2']}>
						<Stepper.Item onClick={() => alert('hi')} />
						<Stepper.Item onClick={() => alert('hi2')} />
					</Stepper>
					<hr />
					<b>CONTAINER</b>
					<Container>
						<Box bg='#e4e4e7'>Container box content</Box>
					</Container>
					<hr />
					<b>DIVIDER</b>
					<Divider />
					<Divider content='Divider text' />
					Hi
					<Divider direction='vertical' />
					Hi
					<Divider direction='vertical' content='Divider text' />
					Hi
					<hr />
					<b>STACK</b>
					<Center className='demo-c-center' p='8px' w='100px' h='100px' bgColor='salmon' color='white' round='8px'>Centered 1</Center>
					<Box className='demo-c-box' m='20px' display='flex' align='center' pos='top' w='48px' h='48px' color='salmon' bgColor='teal' round='20px'>Box 2</Box>
					<Box className='demo-c-box' w='48px' h='48px'>Box 3</Box>
					<Stack gap='4px' divider={<Divider direction='vertical' />}>
						<div>SAS1</div>
						<div>SAS2</div>
						<div>SAS2</div>
						<div>SAS2</div>
					</Stack>
					<hr />
					{/*<Flex>
						Text 1
						<Divider isVertical />
						Text 2
						<Divider isVertical />
						Text 3
					</Flex>
					<hr/>
					<b>FLEX & CENTER/BOX</b>
					<Flex className='demo-l-flex' display='block' direction='column' w='100%' h='50%'>
						<Center className='demo-c-center' p='8px' w='100px' h='100px' bgColor='salmon' fontColor='white' round='8px'>Centered 1</Center>
						<Box className='demo-c-box' w='48px' h='48px'>Box 2</Box>
						<Box className='demo-c-box' w='48px' h='48px'>Box 3</Box>
					</Flex>*/}
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default DemoApp;