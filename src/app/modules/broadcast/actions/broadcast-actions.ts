import MessageData from '@/types/MessageData'

async function sendMessage(object: MessageData) {
    const { broadcastName, message } = object
    setTimeout(() => {
        // Abstração -> Enviar mensagem à lista de transmissão
        console.log('Mensagem enviada à lista!', broadcastName, message)
    }, 1)
}

async function addContactBroadcast(formData: FormData) {
    'use server'

    const broadcastName = formData.get('name') as string
    const contact = formData.get('contact') as string

    setTimeout(() => {
        // Abstração -> Vincular contato à lista
        console.log('Contato vinculado à lista!', broadcastName, contact)
    }, 1)
}

async function removeContactBroadcast(formData: FormData) {
    'use server'

    const broadcastName = formData.get('name') as string
    const contact = formData.get('contact') as string

    setTimeout(() => {
        // Abstração -> Desvincular contato da lista
        console.log('Contato desvinculado da lista!', broadcastName, contact)
    }, 1)
}

async function broadcastMessage(formData: FormData) {
    'use server'

    const broadcastName = formData.get('name') as string
    const message = formData.get('message') as string

    await sendMessage({
        broadcastName,
        message,
    })
}

async function saveContact(formData: FormData) {
    'use server'

    const name = formData.get('name') as string
    const phone = formData.get('phone') as string

    setTimeout(() => {
        // Abstração -> Adicionar contato à base de dados
        console.log('Contato adicionado à base de dados!', name, phone)
    }, 1)
}

async function removeContact(formData: FormData) {
    'use server'

    const name = formData.get('name') as string
    const phone = formData.get('phone') as string

    setTimeout(() => {
        // Abstração -> Remove contato à base de dados
        console.log('Contato removido à base de dados!', name, phone)
    }, 1)
}

const BroadcastActions = {
    addContactBroadcast,
    removeContactBroadcast,
    broadcastMessage,
    saveContact,
    removeContact,
}

export default BroadcastActions