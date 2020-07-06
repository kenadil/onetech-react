export default async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data),
    });
    return response.status;
}