import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import {  Container,Body, Title, Header,Text, View,Content,List,ListItem, Left, Right, Button, Icon,Thumbnail} from "native-base";
import {itemsFetchData,addItemToCart} from '../actions'

class ShopList extends Component {
  static navigationOptions = {
    title: 'Shop List',
    tabBarLabel: 'Shop List'
  };

  componentDidMount() {
     this.props.fetchData('http:///5a53d77e77e1d20012fa0713.mockapi.io/items');
  }

  addItemToCart ( item, index ){
    if(!item.addedToCart)
      this.props.addItem(item,index);
  }
  
  render() {
    return (
  	<Container>
        <Header>
          <Body>
          	<Title>SHOP LIST</Title>
          </Body>
	    </Header>
      <Content>
          <List dataArray={this.props.items}
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
                   <Button transparent  style={{height:40}} iconRight onPress={() => this.addItemToCart(item,index)}>
                      {item.addedToCart ? <Icon name='ios-checkmark-circle-outline'/> : <Icon name='ios-add'/>}
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
        items: state.itemsReducer.items,
        hasErrored: state.itemsReducer.itemsHasErrored,
        isLoading: state.itemsReducer.getItems
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        addItem: (item,index) => dispatch(addItemToCart(item,index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
