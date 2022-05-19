import $api from "./index";

const INBOX_API_PATH = '/inbox'

// POST
export const sendMail = async (mail) => {
    const {data} = await $api.post(INBOX_API_PATH + '/send', mail)
    return data
}

// GET
export const getMail = async (id: number) => {
    const {data} = await $api.get(INBOX_API_PATH + '/' + id,)
    return data
}

export const getInputMail = async () => {
    const {data} = await $api.get(INBOX_API_PATH,)
    return data
}

export const getOutputMail = async () => {
    const {data} = await $api.get(INBOX_API_PATH + '/output',)
    return data
}

// PUT
export const importantInputMail = async (id: number) => {
    const {data} = await $api.put(INBOX_API_PATH + '/important/' + id)
    return data
}

export const importantOutputMail = async (id: number) => {
    const {data} = await $api.put(INBOX_API_PATH + '/important/output/' + id)
    return data
}

// DELETE
export const deleteInputMail = async (id: number) => {
    const {data} = await $api.delete(INBOX_API_PATH + '/del/' + id)
    return data
}

export const deleteOutputMail = async (id: number) => {
    const {data} = await $api.delete(INBOX_API_PATH + '/output/' + id)
    return data
}