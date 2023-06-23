import { rest } from 'msw';

const userResponseJson = {
	tokens: {
		short: "123",
		long: "456789"
	},
	user: {
		_id: 12345,
		isEmailVerified: false,
		createdAt: "2023-01-03T05:17:29.756+00:00",
		updatedAt: "2023-01-03T05:44:26.687+00:00"
	}
}

export const handlers = [
	rest.post("https://auth.bigfootds.dev/users/signup", (request, response, context) => {
		return response(context.status(200), context.json(userResponseJson));
	}),
	rest.get("https://auth.bigfootds.dev/users/getUserFromJwtShort", (request, response, context) => {
		return response(context.status(200), context.json(userResponseJson));
	}),
	rest.get("https://auth.bigfootds.dev/users/getUserFromJwtLong", (request, response, context) => {
		return response(context.status(200), context.json(userResponseJson));
	})
]