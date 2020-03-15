/**
 * chakra-ui does not have a Table component just yet.
 * This thread hints that one is coming: https://github.com/chakra-ui/chakra-ui/issues/135
 * In the mean time this file is an extension of an example posted in the thread
 */
import PropTypes from 'prop-types';
import React from 'react';
import {Heading, Link, Text} from '@chakra-ui/core';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

const cellCSS = ({theme}) => css`
  text-align: left;
  font-weight: 400;
  vertical-align: middle;
  padding: ${theme.space[2]}};

  &:first-child {
    padding-left: ${theme.space[4]}};
  }

  &:last-child {
    padding-right: ${theme.space[4]}};
  }
`;

const StyledTable = styled('table')`
  width: 100%;
  max-width: 100%;

  thead {
    th {
      ${cellCSS};
    }
  }

  tbody {
    tr:nth-of-type(odd) {
      background-color: ${({theme}) => theme.colors.blackAlpha[50]};
    }

    td {
      ${cellCSS};
    }
  }
`;

export const TableHeader = props => {
  const {text} = props;

  return <Heading fontSize="m">{text}</Heading>;
};

TableHeader.propTypes = {
  text: PropTypes.string
};

const Table = props => {
  const {getRowLink, headers, hideHeaders, rows} = props;

  return (
    <StyledTable>
      {!hideHeaders && (
        <thead>
          <tr>
            {headers?.map(({key, label}) => (
              <th key={key}>
                <Text color="gray.500" fontSize="md" fontWeight="bold">
                  {label}
                </Text>
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows?.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {headers?.map(({key, getValue}, keyIndex) => {
                const value = getValue ? getValue(row) : row?.[key];
                const children = <Text fontSize="md">{value}</Text>;

                return (
                  <td key={keyIndex}>
                    {getRowLink ? (
                      <Link href={getRowLink(row)}>{children}</Link>
                    ) : (
                      children
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  getRowLink: PropTypes.func,
  headers: PropTypes.arrayOf(PropTypes.shape()),
  hideHeaders: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.shape())
};

export default Table;
