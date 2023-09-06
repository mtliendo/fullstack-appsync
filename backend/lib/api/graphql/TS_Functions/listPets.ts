import * as ddb from '@aws-appsync/utils/dynamodb'
import { Context } from '@aws-appsync/utils'
import { Pet } from '../src/API'

export function request() {
	return ddb.scan({})
}

export function response(ctx: Context) {
	return ctx.result.items as [Pet]
}
