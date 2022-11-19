import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Checkbox, Button, Row, Col } from 'antd';
import FormControl from '../UI/FormControl/FormControl';

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        label="Your message"
        htmlFor="message"
        error={errors.message && <span>Este campo é obrigatório!</span>}
      >
        <Controller
          name="message"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input.TextArea
              rows={5}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </FormControl>
      <Row gutter={30}>
        <Col md={12}>
          <FormControl
            label="Your email"
            htmlFor="email"
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
        </Col>
        <Col md={12}>
          <FormControl
            label="Your contact number"
            htmlFor="phone"
            error={
              errors.phone && (
                <Fragment>
                  {errors.phone?.type === 'required' && (
                    <span>Este campo é obrigatório!</span>
                  )}
                  {errors.phone?.type === 'pattern' && (
                    <span>Please enter your valid number!</span>
                  )}
                </Fragment>
              )
            }
          >
            <Controller
              name="phone"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]*$/ }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
          </FormControl>
        </Col>
      </Row>
      <FormControl>
        <Controller
          control={control}
          name="cookie"
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <Checkbox onChange={onChange} checked={value}>
              Save my email in the browser fro the next time I contact
            </Checkbox>
          )}
        />
      </FormControl>
      <FormControl>
        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </FormControl>
    </form>
  );
}
