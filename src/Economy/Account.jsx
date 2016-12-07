import React from 'react'
import BackboneReact from 'backbone-react-component'

import Currency from '../Formatters/Currency'

//import { EconomyAccountingInstructionList } from './Instruction'

var EconomyAccount = React.createClass({
	mixins: [Backbone.React.Component.mixin],

	handleChange: function(event)
	{
		// Update the model with new value
		var target = event.target;
		var key = target.getAttribute("name");
		this.state.model[key] = target.value;

		// When we change the value of the model we have to rerender the component
		this.forceUpdate();
	},

	render: function()
	{
		return (
			<div>
				<form className="uk-form uk-form-horizontal">
					<div className="uk-form-row">
						<label className="uk-form-label">Kontonummer</label>
						<div className="uk-form-controls">
							<div className="uk-form-icon">
								<i className="uk-icon-database"></i>
								<input type="text" value={this.state.model.account_number} className="uk-form-width-large" onChange={this.handleChange} />
							</div>
						</div>
					</div>

					<div className="uk-form-row">
						<label className="uk-form-label">Titel</label>
						<div className="uk-form-controls">
							<div className="uk-form-icon">
								<i className="uk-icon-database"></i>
								<input type="text" value={this.state.model.title} className="uk-form-width-large" onChange={this.handleChange} />
							</div>
						</div>
					</div>

					<div className="uk-form-row">
						<label className="uk-form-label">Beskrivning</label>
						<div className="uk-form-controls">
							<textarea value={this.state.model.description} className="uk-form-width-large" onChange={this.handleChange} />
						</div>
					</div>

					<div className="uk-form-row">
						<label className="uk-form-label">Balans</label>
						<div className="uk-form-controls">
							<Currency value={this.state.model.balance} currency="SEK" />
						</div>
					</div>
				</form>
			</div>
		);
	},
});

module.exports = EconomyAccount;