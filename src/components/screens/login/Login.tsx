import AuthForm from '@/components/ui/forms/auth-form'
import { CONFIG } from '@/constants/config.constant'
import { PATH } from '@/constants/path.constant'

export default function Login() {
	return (
		<AuthForm
			title={CONFIG.LOGIN.METADATA.TITLE}
			otherTitle={CONFIG.REGISTER.METADATA.TITLE}
			otherHref={PATH.REGISTER}
		/>
	)
}
