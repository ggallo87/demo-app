export default function Pokestats( stats ){

    return(
        <>
            { stats?.map((stats, base_stat, index) =>(
                <div key={index} style= {{
                    display: "flex"
                    }}>
                    <p> {stats.name} </p>
                    <p> {`:${base_stat}%`} </p>
                </div>
            ))}
        </>
    )
}