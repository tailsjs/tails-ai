export class TelegramSender {
    private token: string
    private channelId: number
    private URI: string = "https://api.telegram.org/bot"

    constructor (token: string, channelId: number) {
        this.token = token
        this.channelId = channelId
    }

    async sendToChannel (text: string) {
        if (!this.token) {
            throw new Error("Invalid token")
        }

        if (!this.channelId) {
            throw new Error("Invalid channelId")
        }

        const uriSearch = new URLSearchParams()

        uriSearch.set("chat_id", this.getChannelId())
        uriSearch.set("text", text)

        const result = await fetch(this.URI + this.token + "/sendMessage?" + uriSearch)

        const response = result.json()

        return response
    }

    private getChannelId () {
        return this.channelId < -100 ? this.channelId.toString() : `-100${this.channelId}`
    }
}