import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import { Group } from '@mui/icons-material';
import { NavLink } from 'react-router';
import ButtonLink from '../shared/components/ButtonLink';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
      }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Button component={NavLink} to="/" sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Reactivities
                </Typography>
              </Button>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <ButtonLink to="/activities">
                Activities
              </ButtonLink>
              <ButtonLink to="/createActivity">
                Create Activity
              </ButtonLink>
            </Box>
            <Button>
                User menu
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}