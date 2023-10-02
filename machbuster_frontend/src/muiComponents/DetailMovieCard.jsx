import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import CardMedia from "@mui/material/CardMedia"
import Typography from '@mui/material/Typography';




export default function DetailMovieCard({movie}){
    return (<>
    <Container maxWidth="sm">
        <Box>
            <Paper>
                <h1>{movie.title}</h1>
                <CardMedia
                component="img"
                image={movie.movieImg}
                alt={movie.title}
                style={{
                    width: '225px', // Set the desired width
                    height: '420px', // Set the desired height
                    objectFit: 'cover', // This will maintain aspect ratio and cover the container
                  }}
                />

                <h2>this</h2>
                <h3>work</h3>
            </Paper>
        </Box>
    </Container>
    
    
    
    
    
    </>
    )
}