export const getApiGames = async (url) => {
    try {
        const res = await fetch(url);

        if(!res.ok) {
            console.error('Kunde inte hämta.', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('Kunde inte hämta.', error.message);
        return false;
    }
}