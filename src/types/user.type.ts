import type { IBaseModel } from './base-model.type'

export interface IUser extends IBaseModel {
	password: string
	phone_number: string
	name: string
	role: UserRoleEnum
}

export enum UserRoleEnum {
	CUSTOMER = 'customer',
	MANAGER = 'manager',
	ADMIN = 'admin',
}
