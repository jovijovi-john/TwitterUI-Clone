import React from 'react';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';

import StickyBox from "react-sticky-box";
import FollowSugestion from '../FollowSugestion';
import News from "../News";
import List from "../List"

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List 
                        title='Talvez você curta'
                        elements={[
                            <FollowSugestion
                                name="Paulo Victor Borges"
                                nickname="@pv_borges"
                            />,
                            <FollowSugestion
                                name="André Filipe Barreto"
                                nickname="@filipinho_barreto"
                            />,  
                            <FollowSugestion
                                name="Iago Victor Silva"
                                nickname="@iago_vipper"
                        />,
                        ]}
                    />
                    
                    <List 
                        title='Talvez você curta'
                        elements={[
                            <News />, <News />, <News />,
                        ]}
                    />

                    <List 
                        title='Talvez você curta'
                        elements={[
                            <News />, <News />, <News />,
                        ]}
                    />

                    <List 
                        title='Talvez você curta'
                        elements={[
                            <News />, <News />, <News />,
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
    );
}

export default SideBar;