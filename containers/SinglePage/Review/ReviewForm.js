import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Rate, Checkbox, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { Form } from './Review.style';

const reviewPhotos = [
  {
    uid: '1',
    name: 'hotel-1.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '2',
    name: 'hotel-2.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '3',
    name: 'hotel-3.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

export default function ReviewForm() {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      reviewPhotos,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        label="Dê uma nota"
        htmlFor="ratings"
        error={errors.ratings && <span>Este campo é obrigatório!</span>}
      >
        <Controller
          name="ratings"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Rate onChange={onChange} onBlur={onBlur} value={value} />
          )}
        />
      </FormControl>
      <FormControl
        label="Titulo da sua avaliação"
        htmlFor="reviewTitle"
        error={errors.reviewTitle && <span>Este campo é obrigatório!</span>}
      >
        <Controller
          name="reviewTitle"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Dê um titulo para a sua avaliação"
            />
          )}
        />
      </FormControl>
      <FormControl
        label="Detalhes da sua avaliação"
        htmlFor="reviewDetails"
        error={errors.reviewDetails && <span>Este campo é obrigatório!</span>}
      >
        <Controller
          name="reviewDetails"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input.TextArea
              rows={5}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Escreva com mais detalhes sobre o local, estadia, ongs, para que outros nômades possam ver?"
            />
          )}
        />
      </FormControl>

      <FormControl>
        <Controller
          control={control}
          name="termsAndCondition"
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <Checkbox onChange={onChange} checked={value}>
              I certify that this review is based on my own experience and is my
              genuine opinion of this hotel, and that I have no personal or
              business relationship with this establishment, and have not been
              offered any incentive or payment originating from the
              establishment to write this review. I understand that Partiu
              has a zero-tolerance policy on fake reviews.
            </Checkbox>
          )}
        />
      </FormControl>
      <FormControl className="submit-container">
        <Button htmlType="submit" type="primary" size="large">
          Enviar Avaliação
        </Button>
      </FormControl>
    </Form>
  );
}
