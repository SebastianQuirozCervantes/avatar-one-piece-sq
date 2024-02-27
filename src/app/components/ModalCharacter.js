import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useFetch } from "../../utils/hooks";
import Modal from '@mui/material/Modal';
import SkeletonCard from './SkeletonCard';
import Espana from '../../assets/espana.png';
import EstadosUnidos from '../../assets/estados-unidos.png';
import Japon from '../../assets/japon.png'
import X from '../../assets/x.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ModalCharacter = (props) => {
    const apiUrl = process.env.REACT_APP_URL_API;
    const { open, handleClose, characterId } = props;
    
    const { data, isLoading } = useFetch(`${apiUrl}/characters/${characterId}/full`)
    const spanishVoice = data?.data?.voices?.find(e => e.language === 'Spanish');
    const englishVoice = data?.data?.voices?.find(e => e.language === 'English');
    const japaneseVoice = data?.data?.voices?.find(e => e.language === 'Japanese');
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {
                    isLoading ? (<SkeletonCard />)
                    : (
                        <Grid container spacing={3}>
                            <Grid item md={12} style={{display: 'flex', justifyContent: 'end'}}>
                                <Button onClick={handleClose}><img src={X} alt="close" style={{height: '3rem'}}/> </Button>
                            </Grid>
                            <Grid item md={3}>
                                <img src={data?.data?.images?.jpg?.image_url} alt={data?.data?.name}/>
                            </Grid>
                            <Grid item md={9}>
                                <Typography>{data?.data?.name}</Typography>
                                <Typography variant="body2" color="text.secondary">{data?.data?.name_kanji}</Typography>
                                <Typography paragraph variant="body2" color="text.secondary" style={{textAlign: 'justify', maxHeight: '10rem', overflowY: 'auto'}}>{data?.data?.about}</Typography>
                                <Grid container>
                                    <Grid item md={6}>
                                        <Typography>Voices: </Typography>
                                        {
                                            spanishVoice && (
                                            <Typography style={{display: 'flex', alignItems: 'center'}}>
                                                <img src={Espana} alt="España" style={{height: '40px'}} />&nbsp;{spanishVoice?.person?.name}
                                            </Typography>)
                                        }
                                        {
                                            englishVoice && (
                                            <Typography style={{display: 'flex', alignItems: 'center'}}>
                                                <img src={EstadosUnidos} alt="España" style={{height: '40px'}} />&nbsp;{englishVoice?.person?.name}
                                            </Typography>)
                                        }
                                        {
                                            japaneseVoice && (
                                            <Typography style={{display: 'flex', alignItems: 'center'}}>
                                                <img src={Japon} alt="España" style={{height: '40px'}} />&nbsp;{japaneseVoice?.person?.name}
                                            </Typography>)
                                        }
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography>Nicknames: </Typography>
                                        {
                                            data?.data?.nicknames.map((nickname, idx) => (
                                            <Typography key={idx} paragraph variant="body2" color="text.secondary" style={{margin: '0px'}}>◉{nickname}</Typography>
                                            ))
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    )
                }
            </Box>
            
        </Modal>
    )
}

export default ModalCharacter;