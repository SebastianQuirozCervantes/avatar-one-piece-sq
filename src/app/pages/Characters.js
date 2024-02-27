
import { useParams } from 'react-router-dom';
import { useFetch } from "../../utils/hooks";
import { useState } from "react" 
import CharacterCard from "../components/CharacterCard";
import SkeletonCard from "../components/SkeletonCard";
import Grid from "@mui/material/Grid";
import NotFound from '../../assets/notFound.png';
import ModalCharacter from "../components/ModalCharacter"
const Characters = () => {
    const apiUrl = process.env.REACT_APP_URL_API;
    const { id } = useParams();
    const { data, isLoading } = useFetch(`${apiUrl}/anime/${id}/characters`)
    const [open, setOpen] = useState(false);
    const [characterId, setCharacterId ] = useState(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const emptyArray = new Array(8).fill(0)
    return (
        <Grid className='container-padding'>
            <Grid container spacing={3}>
                { isLoading ? (
                   emptyArray.map((e, idx) =>(
                    <Grid md={2} key={idx} item>
                        <SkeletonCard />
                    </Grid>)))
                 : data ? data?.data?.map((e, idx) => (
                    <Grid md={2} key={idx} item>
                        <CharacterCard 
                            characterInfo={e} 
                            setCharacterId={setCharacterId}
                            handleOpen={handleOpen}
                        />
                    </Grid>
                    ))
                : (
                    <Grid item md={12} className="d-flex j-content-center">
                        <img src={NotFound} alt="Not Found" className='max-width-50'/>
                    </Grid>)
                }
            </Grid>
            <ModalCharacter open={open} handleClose ={handleClose} characterId={characterId}/>
        </Grid>)
}

export default Characters