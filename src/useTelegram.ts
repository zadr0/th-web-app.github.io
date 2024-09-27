

export const ts = window.Telegram?.WebApp;


declare global {
    interface Window {
        Telegram: any
    }
}