# tails-ai
Моя шедевропопытка связать Telegram и FreeGPT.

# Настройка
1. Установите [node.js](https://nodejs.org/)
2. Установите [TypeScript](https://www.typescriptlang.org/download/)
3. Клонируйте репозиторий в свою локальную директорию
4. Введите в консоль `npm install`
5. Введите токен вашего бота и ID канала в `/src/env.ts`
6. Введите в консоль `tsc`
7. Введите в консоль `node dist/index.js`

```ts
const ai = new AI("Привет!");
await ai.request(); // Привет! Как дела?
ai.createNewMessage("user", "Помоги мне сделать то-то, это-то");
await ai.request(); // Ну давай помогу. Смотри...
```

# Остались вопросы или возникли трудности?
Отписывайте в [issues](/https://github.com/tailsjs/tails-ai/issues/)!