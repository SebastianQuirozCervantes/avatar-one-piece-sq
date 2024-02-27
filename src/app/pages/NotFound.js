import NotFoundImg from "../../assets/notFound.png"
import { Grid } from "@mui/material"
const NotFound = () => {
    return (
    <Grid container>
        <Grid item md={12} className="d-flex j-content-center">
            <img src={NotFoundImg} alt="Not Found" className='max-width-50'/>
        </Grid>
    </Grid>)
}

export default NotFound