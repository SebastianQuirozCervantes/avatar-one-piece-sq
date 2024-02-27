import { Card, CardContent, Skeleton } from '@mui/material';

const SkeletonCard = () => {
    return (
        <Card>
            <CardContent>
                <Skeleton animation="wave" height={40} width="100%" />
                <Skeleton animation="wave" height={20} width="100%" />
                <Skeleton animation="wave" height={200} width="100%" />
            </CardContent>
        </Card>
    )
}

export default SkeletonCard;