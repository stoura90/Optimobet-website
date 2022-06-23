export default async function APIRequest(
    path,
    method,
    body,
    token
) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    token && headers.append('Authorization', `Bearer ${token}`)
    const options = {
        method,
        headers,
        body
    }
    const result = await fetch(`${process.env.API_URL}${path}`, options)
    const data = await result.json();
    if (result.status === 200) {
        return data;
    } else {
        throw new Error(data.message || data.error);
    }
}