export default async function Login(
    email,
    password
) {
    const body = {
        email,
        password
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    }
    const result = await fetch(`${process.env.API_URL}/login`, options)
    const data = await result.json();
    if (result.status === 200) {
        return data;
    } else {
        throw new Error(data.message ? data.message : data.error);
    }
}