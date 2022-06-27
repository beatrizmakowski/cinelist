import { ReactNode } from "react";
import { Container } from "@mui/material";
import backgroundImage from '../assets/backgroundImage.png';

interface CustomBackgroundProps {
    children: ReactNode;
}

export function CustomBackground({ children }: CustomBackgroundProps) {
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
            {children}
        </Container>
    );
}