export const loadItems = (key) => {
    try{
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : [];

    } catch{
        return [];
    }
}