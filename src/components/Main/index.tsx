import React from 'react';

import { 
    Container,
    Header,
    BackIcon,
    ProfileInfo,
    BottomMenu,
    HomeIcon,
    SearchIcon,
    BellIcon,
    EmailIcon,
} from './styles';

import ProfilePage from "../ProfilePage";

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>João Víctor Gonçalves</strong>
                <span>210 Tweets</span>
            </ProfileInfo>
        </Header>

        <ProfilePage />

        <BottomMenu>
            <HomeIcon className='active'/>
            <SearchIcon className='active'/>
            <BellIcon className='active'/>
            <EmailIcon className='active'/>
        </BottomMenu>
    </Container>
  );
}

export default Main;