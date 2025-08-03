import Cookies from "js-cookie";

export const getMessageCount = () => {
    const stored = Cookies.get("chat-usage");
    if (!stored) return { date: "", count: 0 };

    try {
        return JSON.parse(stored);
    } catch {
        return { date: "", count: 0 };
    }
};

export const updateMessageCount = () => {
    const today = new Date().toISOString().split("T")[0]; 
    const { date, count } = getMessageCount();

    const newCount = date === today ? count + 1 : 1;
    Cookies.set("chat-usage", JSON.stringify({ date: today, count: newCount }), {
        expires: 1,
    });
};

export const isLimitReached = () => {
    const today = new Date().toISOString().split("T")[0];
    const { date, count } = getMessageCount();
    return date === today && count >= 3;
};