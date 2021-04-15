import useJsonFetch from '../hooks/useJsonFetch';

export default function Error() {
    // eslint-disable-next-line no-unused-vars
    const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

    return (
        <div className="Error">
            <div className="Result">
            {loading ? 'Loading...' : null}
            {error}
            </div>
        </div>
        
    )
}