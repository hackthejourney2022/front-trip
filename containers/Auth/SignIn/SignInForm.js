import React, { useContext, Fragment } from 'react';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Input, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { AuthContext } from 'context/AuthProvider';
import { FORGET_PASSWORD_PAGE } from 'settings/constant';
import { AGENT_ACCOUNT_SETTINGS_PAGE } from 'settings/constant';
import { FieldWrapper } from '../Auth.style';


export default function SignInForm() {
  const { signIn } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    window.location.href = AGENT_ACCOUNT_SETTINGS_PAGE;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        label="Email"
        htmlFor="email"
        setFocus
        error={
          errors.email && (
            <Fragment>
              {errors.email?.type === 'required' && (
                <span>Este campo é obrigatório!</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span>Por favor entre com endereço válido.</span>
              )}
            </Fragment>
          )
        }
      >
        <Controller
          name="email"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="email"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </FormControl>
      <FormControl
        label="Password"
        htmlFor="password"
        error={
          errors.password && (
            <Fragment>
              {errors.password?.type === 'required' && (
                <span>Este campo é obrigatório!</span>
              )}
              {errors.password?.type === 'minLength' && (
                <span>Senha deve conter no mínimo 6 caracteres!</span>
              )}
              {errors.password?.type === 'maxLength' && (
                <span>Password must not be longer than 20 characters!</span>
              )}
            </Fragment>
          )
        }
      >
        <Controller
          name="password"
          defaultValue=""
          control={control}
          rules={{ required: true, minLength: 6, maxLength: 20 }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input.Password onChange={onChange} onBlur={onBlur} value={value} />
          )}
        />
      </FormControl>
      <FieldWrapper>
        <Link href={FORGET_PASSWORD_PAGE}>
          <a>Esqueceu sua senha ?</a>
        </Link>
      </FieldWrapper>
      <Button
        className="signin-btn"
        type="primary"
        size="large"
        htmlType="submit"
        style={{ width: '100%' }}
      >
        <MdLockOpen />
        Login
      </Button>
    </form>
  );
}
