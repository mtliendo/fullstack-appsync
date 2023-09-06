import * as ddb from '@aws-appsync/utils/dynamodb'
import { Context, util } from '@aws-appsync/utils'
import { Pet, CreatePetMutationVariables } from '../src/API'

export function request(ctx: Context<CreatePetMutationVariables>) {
	return ddb.put({
		key: { id: util.autoId() },
		item: ctx.args.input,
	})
}

export function response(ctx: Context) {
	return ctx.result as Pet
}
