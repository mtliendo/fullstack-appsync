import * as ddb from '@aws-appsync/utils/dynamodb'
import { Context } from '@aws-appsync/utils'
import { Pet, DeletePetMutationVariables } from '../src/API'

export function request(ctx: Context<DeletePetMutationVariables>) {
	return ddb.remove({
		key: { id: ctx.args.petID },
	})
}

export function response(ctx: Context) {
	return ctx.result as Pet
}
