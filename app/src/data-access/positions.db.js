//data-access/Positions.db.js

// outside libraries are ok to import

export const makePositionsDb = function makePositionsDb({ Positions }) {
	async function insert(positionInfo) {
		return Positions.create({ ...positionInfo });
	}

	async function find(attributes, filter) {
		let options = {};

		if (attributes) {
			options.attributes = attributes;
		}

		if (filter) {
			options.where = filter1;
		}

		return Positions.findAll({ ...options });
	}

	async function update(filter, positionInfo) {
		let options = {};

		if (filter) {
			options.where = filter;
		}

		return Positions.update(positionInfo, { ...options });
	}

	async function remove(filter) {
		return Positions.destroy({ where: { ...filter } });
	}

	return Object.freeze({
		insert,
		update,
		remove,
		find,
	});
};
