'use client'

import { Button } from '@/components/ui/common/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/common/dialog'
import { useState } from 'react'

interface IProps {
	name: string
	onConfirm: () => void
}

export default function ConfirmDelete({ name, onConfirm }: IProps) {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Button variant='destructive' size='sm' onClick={() => setOpen(true)}>Удалить</Button>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Удалить «{name}»?</DialogTitle>
						<DialogDescription>Это действие удалит запись из локальных данных админ-панели.</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant='outline' onClick={() => setOpen(false)}>Отмена</Button>
						<Button variant='destructive' onClick={() => { onConfirm(); setOpen(false) }}>Удалить</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}
