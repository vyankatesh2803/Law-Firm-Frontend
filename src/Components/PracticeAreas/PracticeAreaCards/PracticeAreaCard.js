import './PracticeAreaCard.css'



export default ({cards}) => {
    return (
        <>
            <div className='temp-flex'>
                {cards.map((e) => {
                    return (
                        <div className='practice-area-image'>
                            <img src={e.src}/>
                            <p>{e.title}</p>
                        </div>
                    )
                })}
            </div>
        </>
            )
}