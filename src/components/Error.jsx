import useJsonFetch from '../hooks/useJsonFetch';

export default function Error() {
    // eslint-disable-next-line no-unused-vars
    const [data, loading, error] = useJsonFetch('https://react8-2-back.herokuapp.com/error');

    return (
        <div className="Error">
            <div className="Result">
            {loading ? 'Loading...' : null}
            {error}
            </div>
        </div>
        
    )
}