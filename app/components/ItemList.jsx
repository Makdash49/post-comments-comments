import React from 'react';
import {connect} from 'react-redux';
import Item from 'Item';

export class ItemList extends React.Component {
  render () {
    var {items} = this.props;
    console.log('ITEMS:', items);

    var renderItems = () => {
      return items.map((item) => {
        return (
          <Item key={item.id} {...item}/>
        );
      });
    };

    return (
      <div>
        {renderItems()}
      </div>
    )
  }

};

export default connect(
  (state) => {
    return state;
  }
)(ItemList);
