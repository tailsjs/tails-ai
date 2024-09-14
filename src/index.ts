import { AI } from "./ai.js";
import { TelegramSender } from "./TelegramSender.js";
import { Env } from "./env.js";

const telegram = new TelegramSender(Env.token, Env.channelId)

async function main () {
    const ai = new AI("Привет! Как дела?")

    const response = await ai.request()

    const telegramResponse = await telegram.sendToChannel(response)

    console.log(telegramResponse)
}

main()