import { useFetch } from "../../utils/hooks";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";
import Grid from "@mui/material/Grid";

const Movies = () => {
    const apiUrl = process.env.REACT_APP_URL_API;
    const { data, isLoading } = useFetch(`${apiUrl}/anime?q=one piece&type=Movie`)
    console.log(data)
    const emptyArray = new Array(8).fill(0)
    return (
        <Grid container spacing={1} style={{padding: '1rem 10rem'}}>
            { isLoading ? (
                emptyArray.map((e, idx) =>(
                <Grid md={3} key={idx} item>
                    <SkeletonCard />
                </Grid>)))
                : data?.data?.map((e, idx) => (
                <Grid md={3} key={idx} item>
                    <MovieCard movieInfo={e}/>
                </Grid>
                ))
            }
        </Grid>
    )
}

export default Movies