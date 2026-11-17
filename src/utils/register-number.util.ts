import {
	type FieldPath,
	type FieldValues,
	type UseFormRegister,
} from 'react-hook-form'

export const registerNumber = <T extends FieldValues>(
	register: UseFormRegister<T>,
) => {
	return (name: FieldPath<T>) =>
		register(name, {
			valueAsNumber: true,
		})
}
