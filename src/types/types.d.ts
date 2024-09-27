import tg from "https://telegram.org/js/telegram-web-app.js";

export declare global {
    namespace window {
        interface Telegram {
            WebApp: tg,
        }
    }
}