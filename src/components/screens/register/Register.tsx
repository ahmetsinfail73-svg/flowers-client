import AuthForm from '@/components/ui/forms/auth-form'
import { CONFIG } from '@/constants/config.constant'
import { PATH } from '@/constants/path.constant'

export default function Register() {
	return (
		<AuthForm
			title={CONFIG.REGISTER.METADATA.TITLE}
			otherTitle={CONFIG.LOGIN.METADATA.TITLE}
			otherHref={PATH.LOGIN}
			isRegister
		/>
	)
}
