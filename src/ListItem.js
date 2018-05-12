import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem, completeItem } from './actions';
import './App.css';

class ListItem extends Component {
	constructor(props) {
		super(props);

		// this.completeTask = this.completeTask.bind(this);
		this.deleteItem = this.deleteItem.bind(this);

	}

	completeItem(index) {
		this.props.completeItem(index);
	}

	deleteItem(item) {
		this.props.removeItem(item);
	}

  render() {
		const { payload, index } = this.props;
    return (
      <div 
				className="list-item" 
				style={{ margin: '5px' }}
			>
				<div className={`item-title ${ payload.cplt ? 'item-cplt' : '' }`}>
					{ payload.title } 
				</div> 
				<button 
					className="btn btn-danger del-btn" 
					onClick={ () => this.deleteItem(payload) }
				> 
					X 
				</button>
				<button 
					className="btn btn-warning cplt-btn" 
					onClick={ () => this.completeItem(index) }
					disabled={ payload.cplt }	
				> 
					Complete 
				</button>
			</div>
    );
	}
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
		removeItem,
		completeItem,
  }
 )(ListItem);
