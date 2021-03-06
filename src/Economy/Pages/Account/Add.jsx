import React from 'react'

// Backbone
import AccountModel from '../../Models/Account'

import EconomyAccount from '../../Components/Forms/Account'

module.exports = React.createClass({
	getInitialState: function()
	{
		var account = new AccountModel({
			period: this.props.params.period,
		});
		return {
			model: account,
		};
	},

	render: function()
	{
		return (
			<div>
				<h2>Skapa konto</h2>
				<EconomyAccount model={this.state.model} />
			</div>
		);
	},
});