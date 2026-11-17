'use client'

import {
	Attachment,
	AttachmentAction,
	AttachmentActions,
	AttachmentContent,
	AttachmentDescription,
	AttachmentGroup,
	AttachmentMedia,
	AttachmentTitle,
} from '@/components/ui/common/attachment'
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from '@/components/ui/common/field'
import { formatFileSize } from '@/utils/format-file-size.util'
import { useId, useState, type ComponentProps } from 'react'
import { Input } from '../common/input'
import Icon from './icon'

interface IProps extends Omit<
	ComponentProps<'input'>,
	'type' | 'value' | 'defaultValue' | 'onChange'
> {
	error?: string
	description?: string
	label: string
	value?: string[]
	onChange?: (value: string[]) => void
}

interface IAttachment {
	key: string
	name: string
	size?: number
	remove: () => void
}

export default function FileField({
	error,
	description,
	label,
	required = true,
	multiple = false,
	accept = 'image/*',
	value = [],
	onChange,
	disabled,
	...props
}: IProps) {
	const id = useId()

	const [files, setFiles] = useState<File[]>([])

	return (
		<Field>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>

			{!(!multiple && files.length > 0) && (
				<Input
					{...props}
					id={id}
					type='file'
					value={undefined}
					defaultValue={undefined}
					multiple={multiple}
					required={required}
					aria-invalid={!!error}
					accept={accept}
					onChange={event => {
						setFiles(Array.from(event.currentTarget.files ?? []))
						onChange?.(event)
					}}
				/>
			)}

			{files.length > 0 && (
				<AttachmentGroup>
					{files.map(file => (
						<Attachment
							key={file.name}
							className={files.length === 1 ? 'w-full' : ''}
						>
							<AttachmentMedia variant='image'>
								{/* <Image src={item.src} alt={item.name} /> */}
							</AttachmentMedia>

							<AttachmentContent>
								<AttachmentTitle>{file.name}</AttachmentTitle>
								<AttachmentDescription>
									{formatFileSize(file.size)}
								</AttachmentDescription>
							</AttachmentContent>

							<AttachmentActions>
								<AttachmentAction
									onClick={() => setFiles(files.filter(f => f !== file))}
								>
									<Icon name='Trash' />
								</AttachmentAction>
							</AttachmentActions>
						</Attachment>
					))}
				</AttachmentGroup>
			)}

			{description && (
				<FieldDescription id={`${id}-description`}>
					{description}
				</FieldDescription>
			)}
			{error && <FieldError id={`${id}-error`}>{error}</FieldError>}
		</Field>
	)
}
