export const ALBUMS = 'Albums',
             LIKES = ALBUMS,
             ORDERS = 'Users/15/Orders',
             USERS = 'Users',
             PAYMENTS = 'Payments';

async function fetchData(apiName) {
    const response = await fetch(`https://localhost:44458/api/${apiName}`);

    if (!response.ok) {
        throw new Error(`HTTP error! ${response.status}`);
    } else {
        return await response.json();
    }
}

export function getVinylsFrom(type) {
    return fetchData(type)
        .then((data) => data)
        .catch(console.log)
}

export function getUserName(user) {
    return fetchData(USERS)
        .then((data) => {
            const filteredData = data.filter(item => item.email === user.email);
            return filteredData[0].name;
        })
        .catch(console.log)
}

export function getPayments(user) {
    return fetchData(PAYMENTS)
        .then((data) => {
            let filteredData = [];

            data.forEach((card) => {
                if (card.userID === user.email) {
                    filteredData.push(card);
                }
            })

            return filteredData;
        })
        .catch(console.log)
}