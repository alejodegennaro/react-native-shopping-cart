import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import {  Container,Body, Title, Header,Text, View,Content,List,ListItem, Left, Right, Button, Icon,Thumbnail} from "native-base";
import {removeItemFromCart} from '../actions'

class MyCart extends Component {
  static navigationOptions = {
    title: 'My Cart',
    tabBarLabel: 'My Cart'
  };

  removeItem ( item,index ){
    this.props.removeItem(item,index);
  }
  
  
 render() {
    return (
  	<Container>
        <Header>
          <Body>
          	<Title>MY CART</Title>
          </Body>
	    </Header>
      <Content>
          <List dataArray={this.props.cart}
            renderRow={(item, sectionId, index) =>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: item.imageUrl }} />
                </Left>
                <Body>
                  <Text>{item.label}</Text>
                   <Text note>Fetched from an API</Text>
                </Body>
                <Right>
                   <Button transparent  style={{height:40}} iconRight onPress={() => this.removeItem(item,index)}>
                      <Icon name='ios-remove-circle-outline'/>
                    </Button>
                </Right>
              </ListItem>
            }>
          </List>
      </Content>
    </Container>

   )
  }
}


const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item,index) => dispatch(removeItemFromCart(item,index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);