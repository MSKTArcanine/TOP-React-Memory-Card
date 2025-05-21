export default function Card({name, id, url, setIdList}){

    const handleClick = () => {
        setIdList(prev => {
            if(!prev.includes(id))
                return [...prev, id];
            return []
        })
    }

    return(
        <button style={{padding: 0, margin: 0, border: 'none'}} onClick={() => handleClick()}>
            <article>
                <img src={url}/>
                <p>{name}</p>
            </article>
        </button>
    )
}