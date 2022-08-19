import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Mauro Cezar</strong>
                        <span>@maurocezar</span>
                        <Dot />
                        <time>17 de Ago</time>
                    </Header>

                    <Description>
                    Momento ridículo do primeiro tempo: falta marcada contra o Flamengo.
                    Era a terceira do time carioca.
                    O técnico do Athletico aparece na TV contando as infrações do seu adversário.
                    Contudo, a equipe dele já tinha o dobro de faltas.
                    É cada uma…
                    </Description>
                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>

                        <Status>
                            <RetweetIcon />
                            31
                        </Status>

                        <Status>
                            <LikeIcon />
                            999
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;