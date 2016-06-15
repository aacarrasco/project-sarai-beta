import React from 'react';

export class Carrasco extends React.Component {
	render(){
		const {children} = this.props;

		return (
			<div>
				Hello { React.Children.map(children,child=>(child)) }!
			</div>
		);
	}
}