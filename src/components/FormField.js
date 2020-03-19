import PropTypes from 'prop-types';
import React from 'react';

import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Text,
  Textarea,
  Tooltip
} from '@chakra-ui/core';

import PasswordInput from './PasswordInput';

const FormField = props => {
  const {
    description,
    fieldKey,
    formik,
    isRequired,
    placeholder,
    label,
    type,
    ...rest
  } = props;
  let InputComponent = null;
  let isCheckBox = false;

  switch (type) {
    case 'checkbox':
      isCheckBox = true;
      InputComponent = Checkbox;
      break;
    case 'password':
      InputComponent = PasswordInput;
      break;
    case 'textarea':
      InputComponent = Textarea;
      break;
    default:
      InputComponent = Input;
  }

  const inputProps = {
    ...(formik?.getFieldProps(fieldKey) || {}),
    id: fieldKey,
    placeholder
  };
  const toolTipIcon = description && (
    <Tooltip hasArrow label={description} placement="top">
      <Icon name="info-outline" />
    </Tooltip>
  );

  return (
    <FormControl
      key={fieldKey}
      isInvalid={formik?.errors[fieldKey] && formik?.touched[fieldKey]}
      isRequired={isRequired}
      {...rest}
    >
      {isCheckBox ? (
        <InputComponent {...inputProps} isChecked={inputProps.value}>
          <Text display="inline">{label}</Text> {toolTipIcon}
        </InputComponent>
      ) : (
        <>
          {label && (
            <>
              <FormLabel htmlFor={fieldKey}>{label}</FormLabel> {toolTipIcon}
            </>
          )}
          <InputComponent {...inputProps} />
        </>
      )}
      <FormErrorMessage>{formik?.errors[fieldKey]}</FormErrorMessage>
    </FormControl>
  );
};

FormField.propTypes = {
  fieldKey: PropTypes.string,
  formik: PropTypes.shape(),
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
};

export default FormField;