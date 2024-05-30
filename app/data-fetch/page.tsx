async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 1 } });

    const data = await res.json();
    return data;
}

export default async function page() {

    const data = await getData();

    return (
        <div>
            <h1>Data-fetch {new Date().toLocaleTimeString()}</h1>
            <ul>
                    {data.map((d: any) => (
                        <li>
                        {d.id}
                        -
                        {d.title}
                        </li>
                    ))}        
            </ul>
        </div>
    );
}
