const { Schema, model } = require("mongoose");

const moment = require("moment");

const roleSchema = new Schema(
	{
		permissions: [
			{
				type: Schema.Types.ObjectId,
				ref: "Permissions",
			},
		],
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

const Role = model("Role", roleSchema);

module.exports = Role;
