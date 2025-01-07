import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setDetail(json.data.movie); 
    }
    useEffect(()=>{
        getMovie();
    }, [])
    return (
    <div>
        {loading ? <h1>Detail Loading...</h1> : 
        <div>
            <img src={detail.medium_cover_image}/>
            <h1>{detail.title}</h1>
            <div>
                Rating {detail.rating} | 👍{detail.like_count}
            </div>
            <hr/>
            <div>
                <span>Genres : {detail.genres} | {detail.runtime}min , {detail.language}</span><br/>
                <span>{detail.year}</span>
            </div>
            <div>

            </div>
        </div>
        }
    </div>
);
}
export default Detail;