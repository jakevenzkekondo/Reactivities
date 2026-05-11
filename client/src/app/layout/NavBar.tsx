import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, CircularProgress, Container } from '@mui/material';
import { Group } from '@mui/icons-material';
import { NavLink } from 'react-router';
import ButtonLink from '../shared/components/ButtonLink';
import { useStore } from '../../lib/hooks/useStore';
import { Observer } from 'mobx-react-lite';
import { useAccount } from '../../lib/hooks/useAccount';
import UserMenu from './UserMenu';


export default function NavBar() {
  const { uiStore } = useStore();
  const { currentUser } = useAccount();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{
        backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)',
      }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Button component={NavLink} to="/" sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h4" sx={{ position: 'relative', fontWeight: 'bold' }}>
                  Reactivities
                </Typography>
                <Observer>
                  {() => uiStore.isLoading ? (
                    <CircularProgress
                      size={20}
                      thickness={7}
                      sx={{
                        color: 'white',
                        position: 'absolute',
                        top: '30%',
                        left: '105%'
                      }}
                    />
                  ) : null}
                </Observer>
              </Button>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <ButtonLink to="/activities">
                Activities
              </ButtonLink>
              <ButtonLink to="/counter">
                Counter
              </ButtonLink>
              <ButtonLink to="/errors">
                Errors
              </ButtonLink>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {currentUser ? (
                <UserMenu />
              ) : (
                <>
                  <ButtonLink to="/login">Login</ButtonLink>
                  <ButtonLink to="/register">Register</ButtonLink>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}