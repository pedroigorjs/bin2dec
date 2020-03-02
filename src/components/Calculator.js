import React, { useState } from 'react';
import { Container, Form, Input, Message } from './calculator/styles';

export const Calculator = () => {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const [validation, setValidation] = useState(false);

  const bin2dec = (arr, index) => {
    if (arr.length === 0) return 0;

    const result = arr.pop() * 2 ** index;

    return result + bin2dec(arr, index + 1);
  };

  const binaryValidation = input => {
    const regex = new RegExp(/^[0-1]{1,}$/g);

    return regex.test(input);
  };

  const handleBinary = event => {
    const binaryNumber = event.target.value.replace(/\s/g, '');
    if (!binaryValidation(binaryNumber)) return setValidation(true);

    setValidation(false);
    return setBinary(binaryNumber);
  };

  const handleDecimal = event => {
    event.preventDefault();

    const binaryArr = binary.split('');
    const dec = bin2dec(binaryArr, 0);

    setDecimal(dec);
  };

  return (
    <Container>
      <h1>Binary to Decimal Converter</h1>
      <Form onSubmit={handleDecimal}>
        {validation && <Message>Value must be in binary</Message>}
        <Input
          name="binary"
          type="text"
          placeholder="Binary input..."
          value={binary}
          onChange={handleBinary}
          required
        />
        <button type="submit">Convert</button>
        <Input
          name="decimal"
          type="text"
          readOnly
          placeholder="Decimal output..."
          value={decimal}
        />
      </Form>
    </Container>
  );
};
