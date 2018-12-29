import * as React from 'react';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import Link from 'next/link';
import PriceTag from './styles/PriceTag';
import { IItem } from '../Types';
import { formatMoney } from '../lib/formatMoney';

export interface ItemProps {
  item: IItem;
}

export default class Item extends React.Component<ItemProps, any> {
  public render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        { item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link href={{
            pathname: '/item',
            query: { id: item.id }
          }}>
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{ formatMoney(item.price) }</PriceTag>
        <p>{item.description}</p>
        <div className='buttonList'>
          <Link href={{ pathname: 'update', id: item.id}}><a>Edit ✏️</a></Link>
          <button>Add to cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    );
  }
}
