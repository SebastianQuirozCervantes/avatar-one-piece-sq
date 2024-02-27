import NotFoundImg from "../../assets/notFound.png"
import { Grid } from "@mui/material"
const NotFound = () => {
    return (
    <Grid container>
        <Grid item md={12} style={{justifyContent: 'center', display: 'flex'}}>
            <img src={NotFoundImg} alt="Not Found" style={{maxWidth: '50vw'}}/>
        </Grid>
    </Grid>)
}

export default NotFound