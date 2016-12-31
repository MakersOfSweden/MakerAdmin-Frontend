import Backbone from 'backbone'

module.exports = Backbone.Model.fullExtend(
{
	idAttribute: "group_id",
	urlRoot: "/membership/group",
	defaults: {
		created_at: "0000-00-00T00:00:00Z",
		updated_at: "0000-00-00T00:00:00Z",
		parent: "",
		name: "",
		title: "",
		description: "",
	},
});