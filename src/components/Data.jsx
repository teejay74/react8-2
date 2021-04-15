import useJsonFetch from '../hooks/useJsonFetch';

export default function Data() {
    // eslint-disable-next-line no-unused-vars
    const [data, loading, error] = useJsonFetch('https://react8-2-back.herokuapp.com/data');
    return (
        <div className="Data">
            <div className="Result">
            {loading ? 'Loading...' : null}
            {data.status}
            </div>
        </div>       
    )
}