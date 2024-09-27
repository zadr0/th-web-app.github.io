import "telegram-webapps";

declare global {
    interface Window {
        Telegram: typeof Telegram.WebApp,
    }
}