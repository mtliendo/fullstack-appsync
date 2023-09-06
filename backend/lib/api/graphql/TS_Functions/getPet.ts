import * as ddb from '@aws-appsync/utils/dynamodb'
import { Context } from '@aws-appsync/utils'
import { GetPetQueryVariables, Pet } from '../src/API'

export function request(ctx: Context<GetPetQueryVariables>) {
	return ddb.get({ key: { id: ctx.args.petID } })
}

export function response(ctx: Context) {
	return ctx.result as Pet
}
