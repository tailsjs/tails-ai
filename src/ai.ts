import { createHash } from "crypto"

type ROLES = "user" | "system" | "assistent"

interface Message {
    role: ROLES,
    content: string
}

export class AI {
    private messages: Array<Message> = []
    private URI = "https://chat10.free2gpt.xyz"
    private ENDPOINT = "/api/generate"

    constructor (prompt: string) {
        this.messages = [
            {
                role: "system",
                content: prompt
            }
        ]
    }

    createNewMessage (role: ROLES, content: string) {
        this.messages.push({ role, content })
    }

    async request () {
        const time = Date.now()
        const data = {
            messages: this.messages,
            time,
            pass: null,
            sign: this.generateSignature(time)
        }

        const result = await fetch(this.URI + this.ENDPOINT, {
            method: "POST",
            body: JSON.stringify(data)
        })

        const response = await result.text()

        this.createNewMessage("assistent", response)

        return response
    }

    private getLastMessage () {
        return this.messages.slice(-1)[0].content
    }

    private generateSignature (time: number) {
        return createHash("sha256").update(`${time}:${this.getLastMessage()}:`).digest('hex') // ${secret}
    }

    getMessages () {
        return this.messages
    }
}