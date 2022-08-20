import React from 'react';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';


import FollowSugestion from '../FollowSugestion';
import List from "../List"

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

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
                        <h1>Test</h1>,
                        <h1>Test</h1>,
                        <h1>Test</h1>,
                    ]}
                />
            </Body>
        </Container>
    );
}

export default SideBar;