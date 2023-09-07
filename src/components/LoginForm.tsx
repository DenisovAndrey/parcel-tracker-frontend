import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FormHead } from '../ui-kit/atoms/FormHead';
import { InputSet } from '../ui-kit/atoms/InputSet';
import { Button } from '../ui-kit/atoms/Button';
import { isValidEmail } from '../helpers/validators';
import { ErrorNotification } from '../ui-kit/atoms/ErrorNotification';

const appTitle = 'Parcel tracking service';
const appDescription = 'Please fill down your data to see recent orders';

const Section = styled.div`
  padding: 24px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: end;
`;

const ButtonsSection = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
`;

const Form = styled.form`
    margin: auto;
    max-width: 800px;
    border: 1px solid #F6F4FF;
`;

interface LoginFromProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, v: string) => void
}
export const LoginForm: FC<LoginFromProps> = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isValidEmail(email)) {
      setIsError(true);
      e.preventDefault();
      return;
    }

    setIsError(false);
    handleSubmit(e, email);
  };

  return (
    <Form aria-label={appDescription} onSubmit={onSubmit}>
      <FormHead description={appDescription} title={appTitle} />
      <Section>
        <InputSet title="Email" type="email" onChange={setEmail} value={email} />
        <ButtonsSection>
          <Button type="submit">Login</Button>
        </ButtonsSection>
      </Section>
      {isError && <ErrorNotification role="alert">Please, provide correct email</ErrorNotification>}
    </Form>
  );
};
