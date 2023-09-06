import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createAppSyncAPI } from './api/appsync'
import { createTable } from './tables/petsTable'

export class BackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)

		const petsDynamoDBTable = createTable(this, {
			tableName: 'petsDDBTable',
		})

		const api = createAppSyncAPI(this, {
			apiName: 'pets-api',
			petTable: petsDynamoDBTable,
		})
	}
}
