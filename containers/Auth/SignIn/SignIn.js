import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from 'antd';
import Logo from 'components/UI/Logo/Logo';
import { REGISTRATION_PAGE } from 'settings/constant';
import SignInForm from './SignInForm';
import SocialLogin from '../SocialLogin';
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth.style';

const SignIn = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Logo
          withLink
          linkTo="/"
          src="/images/logo-alt.svg"
          title="#Partiu"
        />
        <Title>Bem-vindo de Volta</Title>
        <TitleInfo>Faça seu Login</TitleInfo>
        <SignInForm />
        <Text>
          Esqueceu sua conta?&nbsp;
          <Link href={REGISTRATION_PAGE}>
            <a>Cadastre-se</a>
          </Link>
        </Text>
      </FormWrapper>
      <BannerWrapper>
        <Image
          src="/images/login-page-bg.jpg"
          layout="fill"
          objectFit="cover"
          alt="Auth banner"
        />
      </BannerWrapper>
    </Wrapper>
  );
};

export default SignIn;
