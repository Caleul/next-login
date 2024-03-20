import { redirect } from 'next/navigation'
import * as bcrypt from 'bcrypt'
import UserData from '@/types/UserData'

async function saveInDatabase(object: UserData) {
    const { name, email, password } = object
    setTimeout(() => {
        // Abstração -> salvar dados no banco
        console.log('Dados salvos no banco!', name, email, password)
    }, 1)
}

async function createAccount(formData: FormData) {
    'use server'

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const hashPassword = await bcrypt.hash(password, 10)

    await saveInDatabase({
        name,
        email,
        password: hashPassword,
    })
    redirect('/')
}

async function loginAccount(formData: FormData) {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    // Abstração -> login em conta
    redirect('/broadcast')
}

async function forgotPassword(formData: FormData) {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    // Abstração -> recuperação de senha
    redirect('/')
}

const AuthActions = {
    createAccount,
    loginAccount,
    forgotPassword,
}

export default AuthActions