import UpdatePhoneNumberForm from './update-phone-number-form/UpdatePhoneNumberForm'
import UpdateProfileForm from './update-profile-form/UpdateProfileForm'

export default function EditProfile() {
	return (
		<main className='flex-col-lg'>
			<UpdateProfileForm />

			<UpdatePhoneNumberForm />
		</main>
	)
}
