import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { addItem } from './actions';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			myList: [],
			tempItemTitle: '',
			maxItemId: 0,
		}

		this.addToList = this.addToList.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);

	}

	addToList() {
		let currItem = {
			id: this.state.maxItemId + 1,
			title: this.state.tempItemTitle,
			cplt: false,
		};
		this.props.addItem(currItem);
		this.setState({
			maxItemId: this.state.maxItemId + 1,
			tempItemTitle: '',
		});
	}

	handleTitleChange(event) {
    this.setState({tempItemTitle: event.target.value});
	}

  render() {
		const { listReducer } = this.props;
		let mainStyle = {
			width: '95%', 
			display: 'inline-block',
		};
    return (
      <div className="global-wrap">
				<div 
					className="main-entry" 
					style={{mainStyle}}
				>
					<span>with Redux</span>
					<h2>TO-DO:</h2>
					
					<input 
						type="text" 
						className="form-control main-input" 
						value={ this.state.tempItemTitle } 
						onChange={ this.handleTitleChange } 
					/>
					<button 
						className="btn btn-info add-btn" 
						disabled={ this.state.tempItemTitle.length === 0 } 
						onClick={ this.addToList } 
					>
						Add to List
					</button>
				</div>
				
				<br />
				{ listReducer.length === 0 ? null :
					<div className="task-array">
						<h4>Items:</h4>
						{
							listReducer.map((item, index) => {
								return (
									<ListItem 
										key={ `item-${index}` }
										payload={ item }
										index={ index } 
									/>
								)
							})
						}
					</div>
				}
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
		addItem,
  }
 )(App);
