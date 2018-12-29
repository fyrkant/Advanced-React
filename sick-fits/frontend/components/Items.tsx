import * as React from 'react';
import { Query } from 'react-apollo';
import graphql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';
import { IItem } from 'Types';

const ALL_ITEMS_QUERY = graphql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

// export interface ItemsProps {
// }

export default class Items extends React.Component<any, any> {
  public render() {
    return (
      <Center>
        <Query query={ALL_ITEMS_QUERY}>
          {
            ({data, error, loading}) => {
              if (loading) {
                return <p>Loading...</p>;
              }
              if (error) {
                return <p>Error: {error.message}</p>;
              }
              return <ItemsList>
                {data.items.map((item: IItem) => <Item key={item.id} item={item} />)}
              </ItemsList>;
            }
          }
        </Query>
      </Center>
    );
  }
}
