import { Container } from "@mui/material";
import backgroundImage from '../assets/backgroundImage.png';

export function CustomBackground(props:any) {
    return (
        <Container
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#252B3A',
                height: '100vh',
                width: 'auto',
                minWidth: '100vw',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            {props.children}
        </Container>
    );
}