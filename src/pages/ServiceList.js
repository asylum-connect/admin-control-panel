import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, Heading, Text} from '@chakra-ui/core';

import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import {Container, Title} from '../components/styles';
import {useFetch} from '../utils/hooks';

const ServiceList = props => {
  const {data, loading} = useFetch(`/services`);

  return (
    <Box padding={4}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title>Services</Title>
          <Container>
            {data?.opportunities?.map((service, key) => {
              const servicePath = `/services/${service.id}`;

              return (
                <div key={key}>
                  <Link to={servicePath}>
                    <Heading fontSize="l">{service.name}</Heading>
                  </Link>
                  <Text>
                    Offered by: {service?.organization?.name || 'N/A'}
                  </Text>
                  <Text>Last Updated {service.updated_at}</Text>
                </div>
              );
            })}
          </Container>
          <Pagination />
        </>
      )}
    </Box>
  );
};

export default ServiceList;
