import PropTypes from 'prop-types';
import React from 'react';
import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton
} from '@chakra-ui/core';

const Alert = props => {
  const {description, title, type} = props;

  return (
    <ChakraAlert marginBottom={4} status={type}>
      <AlertIcon />
      {title && <AlertTitle mr={2}>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
      <CloseButton position="absolute" right="8px" top="8px" />
    </ChakraAlert>
  );
};

Alert.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
};

export default Alert;
