import useJsonFetch from '../hooks/useJsonFetch';

export default function Loading() {
    // eslint-disable-next-line no-unused-vars
    const [data, loading, error] = useJsonFetch('https://react8-2-back.herokuapp.com/loading');

    return (
        <div className="Loading">
            Loading result:
                <div className="Result">
                    {loading ? 'Loading...' : null}
                    {data ? data.status : null}
                </div>
        </div>
        
    )
}