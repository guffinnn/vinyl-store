export const ALBUMS = 'Albums',
             LIKES = 'Likes',
             USERS = 'Users',
             PAYMENTS = 'Payments',
             ORDERS = 'Orders';

async function fetchData(apiName, method="GET", body) {
    const response = await fetch(`https://localhost:44458/api/${apiName}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        console.log(body);
        throw new Error(`HTTP error! ${response.status}`);
    } else {
        try {
            return await response.json();
        } catch (error) {
            console.error('Ошибка при обработке JSON:', error);
        }
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

export function getUserID(user) {
    return fetchData(USERS)
        .then((data) => {
            const filteredData = data.filter(item => item.email === user.email);
            return filteredData[0].userID;
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

export function postOrders(userID, cart) {
    cart.forEach((item, index) => {
        let order = {
            userID: 14,
            orderDate: new Date().toISOString(),
            status: "Оформлен",
            albumID: Number(item.albumID)
        };

        return fetchData(ORDERS, "POST", order)
            .then((response) => {
                console.log(`Заказ ${index + 1} успешно оформлен`);
                postOrderAlbums(response.orderID, item.albumID);
            })
            .catch(console.log);
    });
}

export function postOrderAlbums(orderID, albumID) {
    let orderAlbum = {
        orderID: orderID,
        albumID: albumID
    };

    return fetchData('OrderAlbums', "POST", orderAlbum)
        .then(() => {
            console.log(`Заказ-альбом для заказа ${orderID} успешно создан`);
        })
        .catch(console.log);
}