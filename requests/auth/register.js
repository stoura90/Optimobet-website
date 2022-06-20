export default async function Register({
    first_name, //required
    last_name, //required
    gender, //required
    country_id, // optional
    email, //required
    birthday, //required|moreThan 18 years old
    password, // required
    passowrd_confirm // required
}) {
    const body = {
        "first_name": "Maxwell", //required
        "last_name": "Hurst", //required
        "gender": "m", //required
        "country_id": 1, // optional
        "email": "maxwellhurst@kozgene.com", //required
        "birthday": "1980-12-30", //required|moreThan 18 years old
        "password": "123456", // required
        "passowrd_confirm": "123456" // required
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
    const result = await fetch(`${process.env.API_URL}/register`, options)
    const data = await result.json();
    if (result.status === 200) {
        return data.content;
    } else {
        throw new Error(data.message);
    }
}