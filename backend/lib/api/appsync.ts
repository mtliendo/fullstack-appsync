import {
	AuthorizationType,
	Code,
	Definition,
	FieldLogLevel,
	FunctionRuntime,
	GraphqlApi,
	SchemaFile,
} from 'aws-cdk-lib/aws-appsync'
import { Table } from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs'
import * as path from 'path'

type AppSyncAPIProps = {
	apiName: string
	petTable: Table
}

export const createAppSyncAPI = (scope: Construct, props: AppSyncAPIProps) => {
	const api = new GraphqlApi(scope, props.apiName, {
		name: props.apiName,
		definition: Definition.fromFile(
			path.join(__dirname, 'graphql/schema.graphql')
		),
		authorizationConfig: {
			defaultAuthorization: {
				authorizationType: AuthorizationType.API_KEY,
			},
		},
		logConfig: {
			fieldLogLevel: FieldLogLevel.ALL,
		},
		xrayEnabled: true,
	})

	const petsDS = api.addDynamoDbDataSource('PetsDS', props.petTable)

	const listPetsResolver = petsDS.createResolver('listPetsResolver', {
		typeName: 'Query',

		fieldName: 'listPets',
		runtime: FunctionRuntime.JS_1_0_0,
		code: Code.fromAsset(
			path.join(__dirname, 'graphql/JS_Functions/listPets.js')
		),
	})

	const getPetResolver = petsDS.createResolver('getPetResolver', {
		typeName: 'Query',
		fieldName: 'getPet',
		runtime: FunctionRuntime.JS_1_0_0,
		code: Code.fromAsset(
			path.join(__dirname, 'graphql/JS_Functions/getPet.js')
		),
	})

	const createPetResolver = petsDS.createResolver('createPetResolver', {
		typeName: 'Mutation',
		fieldName: 'createPet',
		runtime: FunctionRuntime.JS_1_0_0,
		code: Code.fromAsset(
			path.join(__dirname, 'graphql/JS_Functions/createPet.js')
		),
	})

	const updatePetResolver = petsDS.createResolver('updatePetResolver', {
		typeName: 'Mutation',
		fieldName: 'updatePet',
		runtime: FunctionRuntime.JS_1_0_0,
		code: Code.fromAsset(
			path.join(__dirname, 'graphql/JS_Functions/updatePet.js')
		),
	})

	const deletePetResolver = petsDS.createResolver('deletePetResolver', {
		typeName: 'Mutation',
		fieldName: 'deletePet',
		runtime: FunctionRuntime.JS_1_0_0,
		code: Code.fromAsset(
			path.join(__dirname, 'graphql/JS_Functions/deletePet.js')
		),
	})

	return api
}
