import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Compartilhe seus pensamentos aqui!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/F2ovarm.png" alt="Ilustração de um computador, porta-canetas e livros" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
)
}

export default Home;