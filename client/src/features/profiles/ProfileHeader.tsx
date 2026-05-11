import {
    Grid,
    Box,
    Avatar,
    Typography,
    Stack,
    Paper,
} from '@mui/material';
import { useProfile } from '../../lib/hooks/useProfile';
import { useParams } from 'react-router';

export default function ProfileHeader() {
    const { id } = useParams();
    const { profile } = useProfile(id);
    if (!profile) return null;

    return (
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
            <Grid container spacing={2}>
                <Grid size={8}>
                    <Stack sx={{direction: "row", spacing: 3, alignItems: "center"}}>
                        <Avatar
                            alt="User Image"
                            src={profile?.imageUrl}
                            sx={{ width: 150, height: 150 }}
                        />
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            <Typography variant="h4">{profile.displayName}</Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    );
}