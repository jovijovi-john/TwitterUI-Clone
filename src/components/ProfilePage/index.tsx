import React from 'react';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    EditButton,
    LocationIcon,
    CakeIcon,
    Followage,

} from './styles';
import Feed from "../Feed";

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar Perfil</EditButton>

                <h1>João Víctor Gonçalves</h1>
                <h2>@jovijovi_john</h2> 
                
                <p>
                    Developer at <a href="https://unasus.ufma.br">@Unasus</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Luís, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 28 de Julho de 2002
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>

                    <span>
                        <strong>210 </strong>seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    );
}

export default ProfilePage;