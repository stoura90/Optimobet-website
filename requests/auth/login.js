export default async function Register({
    email,
    password
}) {
    const body = {
        "email": "maxwellhurst@kozgene.com",
        "password": "123456"
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        credentials: 'include'
    }
    const result = await fetch(`${process.env.API_URL}/login`, options)
    const data = await result.json();
    if (result.status === 200) {
        return data.content;
    } else {
        throw new Error(data.message);
    }
}