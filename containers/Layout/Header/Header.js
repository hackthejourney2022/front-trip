import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Sticky from 'react-stickynode';
import { IoIosClose } from 'react-icons/io';
import Logo from 'components/UI/Logo/Logo';
import Text from 'components/UI/Text/Text';
import { Button, Drawer } from 'antd';
import Navbar from 'components/Navbar/Navbar';
import { LayoutContext } from 'context/LayoutProvider';
import { AuthContext } from 'context/AuthProvider';
import { AGENT_PROFILE_PAGE } from 'settings/constant';
import HeaderWrapper, {
  MobileNavbar,
  CloseDrawer,
  AvatarWrapper,
  AvatarImage,
  AvatarInfo,
  LogoArea,
} from './Header.style';

const AuthMenu = dynamic(() => import('./AuthMenu'));
const MainMenu = dynamic(() => import('./MainMenu'));
const MobileMenu = dynamic(() => import('./MobileMenu'));
const ProfileMenu = dynamic(() => import('./ProfileMenu'));
const NavbarSearch = dynamic(() => import('./NavbarSearch'));

const avatarImg =
  'http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png';

const LogoIcon = () => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="40.000000pt" height="40.000000pt" viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M1147 5090 c-81 -70 -153 -327 -212 -753 -36 -263 -53 -443 -65 -692
-8 -152 -18 -252 -33 -325 l-22 -105 0 -1475 0 -1475 27 -57 c34 -73 103 -142
176 -176 l57 -27 1485 0 1485 0 57 27 c73 34 142 103 176 176 l27 57 0 1480
c0 1386 -1 1484 -18 1550 -11 45 -23 157 -32 310 -47 787 -159 1377 -282 1485
l-34 30 -335 0 c-271 0 -340 -3 -363 -14 -48 -25 -102 -96 -149 -195 -25 -53
-47 -98 -49 -101 -2 -2 -74 67 -161 153 l-157 157 -165 0 -165 0 -156 -156
c-144 -143 -179 -169 -179 -130 0 26 -80 176 -116 216 -65 72 -55 70 -428 70
l-335 0 -34 -30z m1513 -580 l0 -210 -100 0 -100 0 0 210 0 210 100 0 100 0 0
-210z m651 -333 c407 -99 712 -374 839 -754 61 -183 60 -160 60 -1595 l0
-1308 -226 0 -225 0 24 33 c14 17 35 52 48 77 l24 45 3 928 c3 1024 4 998 -60
1121 -44 82 -156 195 -235 235 -123 62 -108 61 -1000 61 -551 0 -829 -4 -865
-11 -198 -41 -377 -216 -423 -412 -13 -58 -15 -188 -13 -994 l3 -928 24 -45
c13 -25 34 -60 48 -77 l24 -33 -150 0 -151 0 0 -50 0 -50 1575 0 1575 0 0 -53
c0 -77 -26 -144 -75 -192 -80 -81 39 -75 -1575 -75 -1614 0 -1495 -6 -1575 75
-81 80 -75 -36 -75 1549 0 1547 -1 1516 60 1696 115 344 390 617 730 725 165
52 201 54 900 51 555 -2 654 -5 711 -19z m91 -1268 c168 -35 311 -178 347
-347 8 -37 11 -321 11 -941 0 -999 4 -948 -75 -1026 -79 -79 -15 -75 -1125
-75 -1110 0 -1046 -4 -1125 75 -79 78 -75 27 -75 1026 0 612 3 904 11 941 34
164 170 303 334 344 68 17 1618 19 1697 3z"/>
      <path d="M2495 4051 c-25 -11 -104 -84 -207 -187 -186 -190 -202 -216 -179
-296 11 -35 45 -75 179 -211 169 -171 217 -207 272 -207 55 0 103 36 272 207
134 136 168 176 179 211 23 80 7 106 -179 296 -165 166 -217 206 -272 206 -14
0 -43 -9 -65 -19z m254 -255 c149 -149 173 -177 168 -197 -8 -33 -328 -349
-353 -349 -22 0 -364 337 -364 360 0 20 340 360 360 360 8 0 93 -78 189 -174z"/>
      <path d="M2410 3610 l0 -130 50 0 50 0 0 130 0 130 -50 0 -50 0 0 -130z" />
      <path d="M2610 3610 l0 -130 50 0 50 0 0 130 0 130 -50 0 -50 0 0 -130z" />
      <path d="M1560 2430 l0 -50 78 0 77 0 -3 -284 c-2 -249 -1 -286 13 -300 24
-23 246 -23 270 0 14 14 15 51 13 300 l-3 284 778 0 777 0 0 50 0 50 -1000 0
-1000 0 0 -50z"/>
      <path d="M2926 1164 c-13 -13 -16 -44 -16 -184 0 -140 3 -171 16 -184 13 -14
58 -16 334 -16 276 0 321 2 334 16 24 23 24 345 0 368 -13 14 -58 16 -334 16
-276 0 -321 -2 -334 -16z m584 -184 l0 -100 -250 0 -250 0 0 100 0 100 250 0
250 0 0 -100z"/>
    </g>
  </svg>
);

const Header = ({ router }) => {
  const { loggedIn } = useContext(AuthContext);
  const [{ searchVisibility }] = useContext(LayoutContext);
  const [state, setState] = useState(false);
  const sidebarHandler = () => {
    setState((state) => !state);
  };

  const headerType = router.pathname === '/' ? 'transparent' : 'default';

  return (
    <HeaderWrapper>
      <Sticky top={0} innerZ={1001} activeClass="isHeaderSticky">
        <Navbar
          logo={
            <>
              {headerType === 'transparent' && <LogoIcon />}
              <Logo
                withLink
                linkTo="/"
                src="/images/logo-alt.svg"
                title="#Partiu"
              />
            </>
          }
          navMenu={<MainMenu />}
          isLogin={loggedIn}
          avatar={<Logo src={avatarImg} />}
          profileMenu={<ProfileMenu avatar={<Logo src={avatarImg} />} />}
          headerType={headerType}
          location={router}
          searchVisibility={searchVisibility}
        />
        <MobileNavbar className={headerType}>
          <LogoArea>
            <>
              {headerType === 'transparent' && <LogoIcon />}
              <Logo
                withLink
                linkTo="/"
                src="/images/logo-alt.svg"
                title="#Partiu"
              />
            </>

          </LogoArea>
          <Button
            className={`hamburg-btn ${state ? 'active' : ''}`}
            onClick={sidebarHandler}
          >
            <span />
            <span />
            <span />
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={sidebarHandler}
            width="285px"
            className="mobile-header"
            open={state}
          >
            <CloseDrawer>
              <button onClick={sidebarHandler}>
                <IoIosClose />
              </button>
            </CloseDrawer>
            {loggedIn ? (
              <AvatarWrapper>
                <AvatarImage>
                  <Logo src={avatarImg} />
                </AvatarImage>
                <AvatarInfo>
                  <Text as="h3" content="Nova Scotia" />
                  <Link href={AGENT_PROFILE_PAGE}>
                    <a>View Profile</a>
                  </Link>
                </AvatarInfo>
              </AvatarWrapper>
            ) : (
              <AuthMenu className="auth-menu" />
            )}
            <MobileMenu className="main-menu" />
          </Drawer>
        </MobileNavbar>
      </Sticky>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
