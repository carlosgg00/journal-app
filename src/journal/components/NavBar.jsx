import { useDispatch } from "react-redux"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { startsLogout } from "../../store/auth"

export const NavBar = ({ drowerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startsLogout() );
    }


  return (
    <AppBar
        position="fixed"
        sx={{ 
            width: { sm: `calc(100% - ${ drowerWidth }px)` },
            ml: { sm: `${ drowerWidth }px` }
         }}
    >
        <Toolbar>
            <IconButton
                color= 'inherit'
                edge='start'
                sx={{ mr: 2, display: { sm: 'none', md: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" noWrap component='div'> Journal App</Typography>

                <IconButton
                    color='error'
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid>

        </Toolbar>
    </AppBar>
  )
}
