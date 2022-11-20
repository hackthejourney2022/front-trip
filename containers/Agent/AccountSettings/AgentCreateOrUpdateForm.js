import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, Button, Switch } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { FormTitle, FormSubtitle, FormSmall, FormTextSwitch, TextSwitch, SpaceSwitch } from './AccountSettings.style';
import { LISTING_POSTS_PAGE } from 'settings/constant';

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'Other' },
];
const languageOptions = [
  { label: 'English', value: 'english' },
  { label: 'Spanish', value: 'spanish' },
  { label: 'French', value: 'french' },
  { label: 'Russian', value: 'russian' },
];

const AgentCreateOrUpdateForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = () => window.location.href = LISTING_POSTS_PAGE;;
  return (
    <Fragment>
      <FormTitle>Ei, amigo nômade! Bem Vindo!</FormTitle>
      <FormSubtitle>Nos conte um pouco mais sobre você</FormSubtitle>

      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={30}>
          <Col lg={12}>
            <FormControl
              label="Nome"
              htmlFor="firstName"
              error={errors.firstName && <span>Este campo é obrigatório!</span>}
            >
              <Controller
                name="firstName"
                defaultValue=""
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input onChange={onChange} onBlur={onBlur} value={value} />
                )}
              />
            </FormControl>
          </Col>
          <Col lg={12}>
            <FormControl
              label="Sobrenome"
              htmlFor="lastName"
              error={errors.lastName && <span>Este campo é obrigatório!</span>}
            >
              <Controller
                name="lastName"
                defaultValue=""
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input onChange={onChange} onBlur={onBlur} value={value} />
                )}
              />
            </FormControl>
          </Col>
        </Row>

        <Row gutter={30}>
          <Col lg={12}>
            <FormControl
              label="Cidade Origem"
              htmlFor="cidadeOrigem"
              error={errors.cidadeOrigem && <span>Este campo é obrigatório!</span>}
            >
              <Controller
                name="cidadeOrigem"
                defaultValue=""
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input onChange={onChange} onBlur={onBlur} value={value} />
                )}
              />
            </FormControl>
          </Col>
          <Col lg={12}>
            <FormControl
              label="Cidade Atual"
              htmlFor="cidadeAtual"
              error={errors.cidadeAtual && <span>Este campo é obrigatório!</span>}
            >
              <Controller
                name="cidadeAtual"
                defaultValue=""
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input onChange={onChange} onBlur={onBlur} value={value} />
                )}
              />
            </FormControl>
          </Col>
        </Row>
        <FormSubtitle>Agora conta um pouco mais...</FormSubtitle>
        <Row gutter={30}>
          <Col lg={12}>
            <FormSmall>O que é mais importante para mim na hora de escolher minha viagem.</FormSmall>
            <SpaceSwitch />
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Lugares amigáveis ao público LGBTQ</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Lugares com fácil acesso a atendimento médico</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Lugares com boa segurança pública</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Lugares com respeito a liberdade política</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Lugares seguros para mulheres</FormTextSwitch></TextSwitch>
          </Col>
          <Col lg={12}>
            <FormSmall>E o que você busca?</FormSmall>
            <SpaceSwitch />
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Paisagens de tirar o fôlego</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Opções de culinária variadas</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Opções de culinária Vegetariana / Vegana</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Muitas opções de lojas para compras</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Agitação na vida noturna</FormTextSwitch></TextSwitch>
          </Col>
        </Row>
        <FormSubtitle>Agora conta um pouco mais sobre seu lado de voluntario(a)...</FormSubtitle>
        <Row gutter={30}>
          <Col lg={12}>
            <FormSmall>Qual tema de ações voluntárias você prefere?</FormSmall>
            <SpaceSwitch />
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Assistência Social</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Cultura</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Saúde</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Meio Ambiente</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Desenvolvimento e Defesa de Direitos Humanos</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Habitação</FormTextSwitch></TextSwitch>
            <TextSwitch className='d-flex'><Switch /> <FormTextSwitch> Educação e pesquisa</FormTextSwitch></TextSwitch>

          </Col>
        </Row>
        <div className="submit-container">
          <Button htmlType="submit" type="primary">
            GO GO GO
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default AgentCreateOrUpdateForm;
