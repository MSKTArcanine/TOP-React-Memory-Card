import Card from "./Card";

export default function CardsContainer({cardsArray, setHighScore, setIdList, idList}){
    return(
        <main style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', border:'2px solid brown'}}>
            {cardsArray.map(
                card => (
                    <Card key={card.id} name={card.name} id={card.id} url={card.url} setHighScore={setHighScore} setIdList={setIdList} idList={idList}/>
                )
            )}
        </main>
    )
}