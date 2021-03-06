import React from 'react';
import {Box, Button, Select, Stack, Text} from '@chakra-ui/core';
import PropTypes from 'prop-types';

import {SectionTitle} from './styles';
import {
  USER_TYPE_ADMIN_DM,
  USER_TYPE_DM,
  USER_TYPE_LAWYER,
  USER_TYPE_PROVIDER,
  USER_TYPE_SEEKER,
} from '../utils';
import {useInputChange} from '../utils/hooks';

const userTypes = [
  {label: 'Admin Data Manager', value: USER_TYPE_ADMIN_DM},
  {label: 'Data Manager', value: USER_TYPE_DM},
  {label: 'Lawyer', value: USER_TYPE_LAWYER},
  {label: 'Provider', value: USER_TYPE_PROVIDER},
  {label: 'Seeker', value: USER_TYPE_SEEKER},
];

const FiltersUsers = (props) => {
  const {updateQuery} = props;
  const [type, setType] = useInputChange('');
  const handleSearch = (ev) => {
    ev.preventDefault();

    updateQuery({type});
  };

  return (
    <form onSubmit={handleSearch}>
      <SectionTitle>Filter Users</SectionTitle>
      <Stack>
        <Text>Type:</Text>
        <Select
          onChange={setType}
          variant="filled"
          placeholder="All Users"
          value={type}
        >
          {userTypes?.map(({label, value}) => (
            <option value={value}>{label}</option>
          ))}
        </Select>
        <Box textAlign="right">
          <Button
            display="inline-block"
            onClick={handleSearch}
            variantColor="blue"
          >
            Search
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

FiltersUsers.propTypes = {
  query: PropTypes.object,
  updateQuery: PropTypes.func,
};

export default FiltersUsers;
