import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Group } from '@mui/icons-material';

type Props = {
  openForm: () => void;
}

export default function NavBar({openForm}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
          backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
        }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Group fontSize="large" />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Reactivities
              </Typography>
            </Box>

            {/* Nav Links */}
            <Box sx={{ display: 'flex' }}>
              {['Activities', 'About', 'Contact'].map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  sx={{ fontSize: '1rem', textTransform: 'uppercase', fontWeight: 'bold' }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* CTA Button */}
            <Button
              size="large"
              variant="contained"
              color="warning"
              onClick={openForm}
            >
              Create Activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}