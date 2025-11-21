import { useState, useEffect } from 'react';

interface Pokemon {
    name: string,
    url: string
}

export function Pokeapi () {
    const [data, setData] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() =>  {
        async function callApi() {
            try {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
                const data = await res.json();
                setData(data.results);
            } catch (err) {
                console.error(err); // optional error handling
                setError("Error fetching data!")
            } finally {
                setLoading(false); // only stop loading once fetch is done
            }
        }

       callApi();
        
        
    }, []);

    if (loading) {
        return (
            <div>
                <h3 className='d-flex flex-column justify-content-center text-bg-secondary mt-3'>Loading..!</h3>
            </div>
    );
    }

    if (error) {
        return <div className='text-danger'>{error}</div>
    }

    return (
        <div>
            <h3 className='d-flex flex-column justify-content-center text-bg-secondary mt-3'>Pokemon</h3>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name} - {item.url}</li>
                ))}
            </ul>
        </div>
    );
}