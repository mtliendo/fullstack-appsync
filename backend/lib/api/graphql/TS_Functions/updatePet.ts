import * as ddb from '@aws-appsync/utils/dynamodb'
import { Context } from '@aws-appsync/utils'
import { Pet, UpdatePetMutationVariables } from '../src/API'

export function request(ctx: Context<UpdatePetMutationVariables>) {
	return ddb.put({
		key: { id: ctx.args.input.id },
		item: {
			name: ctx.args.input?.name,
			type: ctx.args.input?.type,
		},
	})
}

export function response(ctx: Context) {
	return ctx.result as Pet
}
