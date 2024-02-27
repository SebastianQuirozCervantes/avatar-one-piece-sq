import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const CharacterCard = ({ characterInfo, setCharacterId, handleOpen }) => {
  const { role, character} = characterInfo
  
  const loadCharacter = () => {
    setCharacterId(character?.mal_id)
    handleOpen();
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={character?.name}
        subheader={role}
        className='text-custom-overflow'
      />
      <div className='container-over-image'>
          <CardMedia
            component="img"
            image={character?.images?.webp?.image_url}
            alt={character?.name}
            className='image-over-image'
            style={{maxHeight: '15rem'}}
          />
          <Button variant="contained" className='button-over-image' onClick={loadCharacter}>Ver más</Button>
      </div>
    </Card>
  );
}

export default CharacterCard