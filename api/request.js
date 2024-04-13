const host = process.env.NEXT_PUBLIC_HOST;

const get = async (url) => {
    const res = await fetch(`${host}${url}`);
    const data = await res.json();
    return data;
};

const post = async (url, body) => {
    const res = await fetch(`${host}${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
};



export { get, post };