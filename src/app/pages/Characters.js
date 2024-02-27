
import { useParams } from 'react-router-dom';
import { useFetch } from "../../utils/hooks";
import { useState, useEffect } from "react" 
import SkeletonCard from "../components/SkeletonCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import NotFound from '../../assets/notFound.png';
import ModalCharacter from "../components/ModalCharacter"
const Characters = () => {
    const apiUrl = process.env.REACT_APP_URL_API;
    const { id } = useParams();
    //Uso de hook para consumir API
    const { data, isLoading } = useFetch(`${apiUrl}/anime/${id}/characters`)
    const [open, setOpen] = useState(false);
    const [characterId, setCharacterId ] = useState(null);
    const [groups, setGroups ] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(data)
    //Este arreglo sirve para mostrar 8 veces el Skeleton
    const emptyArray = new Array(8).fill(0)

    useEffect(() => {
        const elements = data?.data;
        const groupSize = 8;
        const tempGroups = [];
        if(elements){
            for (let i = 0; i < elements.length; i += groupSize) {
                tempGroups.push(elements.slice(i, i + groupSize));
            }
            
            setGroups(tempGroups);
        }
    }, [data]);
    const loadCharacter = (e) => {
        setCharacterId(e?.character?.mal_id)
        handleOpen();
    };
    return (
        <Grid className='container-padding'>
            <Grid container spacing={3}>
                { isLoading ? (
                   emptyArray.map((e, idx) =>(
                    <Grid md={2} key={idx} item>
                        <SkeletonCard />
                    </Grid>)))
                 : groups ? groups?.map((group, idx) => (
                    <section key={idx}>
                        {
                            group.map((e, i) => (
                                <div key={i} className="image-container">
                                    <img src={e?.character?.images?.webp?.image_url} alt="Test"/>
                                    <Button variant="contained" className="boton" onClick={() => loadCharacter(e)}>See more</Button>
                                    <div className="texto">{e?.character?.name}</div>
                                </div>
                            ))
                        }
                    </section>
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

/*


                    <Grid md={2} xs={6} key={idx} item>
                        <CharacterCard 
                            characterInfo={e} 
                            setCharacterId={setCharacterId}
                            handleOpen={handleOpen}
                        />
                    </Grid>
*/