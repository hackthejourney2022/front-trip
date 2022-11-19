import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ActiveLink from 'library/helpers/activeLink';
import { Row, Col, Menu, Avatar } from 'antd';
import Container from 'components/UI/Container/Container.style';
import { AGENT_PROFILE_PAGE } from 'settings/constant';
import AccountSettingWrapper, {
  AccountSidebar,
  AgentAvatar,
  SidebarMenuWrapper,
  ContentWrapper,
  AgentName,
  FromWrapper,
} from './AccountSettings.style';

const AgentCreateOrUpdateForm = dynamic(() =>
  import('./AgentCreateOrUpdateForm')
);
const AgentPictureChangeForm = dynamic(() =>
  import('./AgentPictureChangeForm')
);
const ChangePassWord = dynamic(() => import('./ChangePassWordForm'));

export default function AgentAccountSettingsPage(props) {
  const { processedData } = props;
  const [currentRoute, setCurrentRoute] = useState('edit-profile');
  const profileData = processedData ? processedData[0] : '';
  const firstName = profileData ? profileData.first_name : '';
  const lastName = profileData ? profileData.last_name : '';
  const profilePic = '/images/avatar.png';
  return (
    <AccountSettingWrapper>
      <Container fullWidth={true}>
        <Row gutter={30}>
          <Col md={9} lg={6}>
            <AccountSidebar>
              <AgentAvatar>
                <Avatar src={profilePic} alt="Foto Perfil" />
                <ContentWrapper>
                  <AgentName>
                    {firstName} {lastName}
                  </AgentName>
                  <ActiveLink href={`${AGENT_PROFILE_PAGE}`}>
                    Visualizar Perfil
                  </ActiveLink>
                </ContentWrapper>
              </AgentAvatar>
              <>
                <SidebarMenuWrapper>
                  <ul className="ant-menu">
                    <li
                      className={
                        currentRoute === 'edit-profile' &&
                        'ant-menu-item-selected'
                      }
                    >
                      <a onClick={() => setCurrentRoute('edit-profile')}>
                        Editar Perfil
                      </a>
                    </li>
                    <li
                      className={
                        currentRoute === 'change-photo' &&
                        'ant-menu-item-selected'
                      }
                    >
                      <a onClick={() => setCurrentRoute('change-photo')}>
                        Alterar Foto
                      </a>
                    </li>
                    <li
                      className={
                        currentRoute === 'change-password' &&
                        'ant-menu-item-selected'
                      }
                    >
                      <a onClick={() => setCurrentRoute('change-password')}>
                        Alterar Senha
                      </a>
                    </li>
                  </ul>
                </SidebarMenuWrapper>
              </>
            </AccountSidebar>
          </Col>
          <Col md={15} lg={18}>
            <FromWrapper>
              {currentRoute === 'edit-profile' ? (
                <AgentCreateOrUpdateForm />
              ) : (
                ''
              )}
              {currentRoute === 'change-photo' ? (
                <AgentPictureChangeForm />
              ) : (
                ''
              )}
              {currentRoute === 'change-password' ? <ChangePassWord /> : ''}
            </FromWrapper>
          </Col>
        </Row>
      </Container>
    </AccountSettingWrapper>
  );
}
