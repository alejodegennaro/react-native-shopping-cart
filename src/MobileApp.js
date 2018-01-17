import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {AppNavigator} from './navigation';
import { Root } from "native-base";

export default  class MobileApp extends Component {

	render() {
		return (
        <Root>  
			<AppNavigator/>
        </Root> 
        ) 
	}

}
