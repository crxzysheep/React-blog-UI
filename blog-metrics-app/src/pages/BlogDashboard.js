import React from 'react';  
import { Typography, Paper, Grid, Button, IconButton, Card, CardActions, CardContent, Box, Component, Toolbar, AppBar} from '@mui/material';  
import { AddCircle, Edit, Delete } from '@mui/icons-material';  
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';  
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { spacing } from '@mui/system';


  
const BlogDashboard = () => {  
  const [data, setData] = useState([]);  
  const navigate = useNavigate();

  useEffect(() => {  
    fetchData();  
  }, []);  
  
  const handleClick = () => {
    navigate('/test');
  };

  const fetchData = async () => {  
    try {  
        axios.get('http://localhost:8080/all').then((response) => {
          setData(response.data);
        });
    } catch (error) {  
      console.error('Error fetching data:', error);  
    }  
  };  
  return (  
    <div>  
      <Box sx={{ flexGrow: 1, bgcolor:'info.main'}}>
        <AppBar position="static" sx={{bgcolor: '#0b521e'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr:2}}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" sx={{mt:1}}>  
                Blog Dashboard  
              </Typography>
          </Toolbar>
        </AppBar>
          
        <Grid container direction="row" justifyContent="flex-start" alignItems="center">  
          <Grid item xs={12}>  
            <Paper elevation={3} style={{ padding: '1rem' }}>  
              <Typography variant="h2" sx={{mb:2}}>  
                Blog Posts  
              </Typography>  
              {/* Render a list of blog posts */}  
              <ul>  
                <Box sx={{flexGrow:1}}>
              <Grid container direction="row" justifyContent="flex-start" alignItems="center" columnSpacing={{xs:1, sm:2, md:3}} rowSpacing={3}>  
              {data.map((blog) => (  
                <Grid item xs={4}>
                  <Card>
                    <React.Fragment>
                      <CardContent>
                        <Typography variant="h4">  
                          {blog.title}
                        </Typography>  
                        <Typography variant="body1">  
                          {blog.content_box}  
                        </Typography>
                        <Typography variant="body2">  
                          {blog.content_box_2}  
                        </Typography>
                        <IconButton color="primary" aria-label="edit">  
                          <Edit />  
                        </IconButton>  
                        <IconButton color="secondary" aria-label="delete">  
                          <Delete />  
                        </IconButton>  
                      </CardContent>
                    </React.Fragment>
                  </Card>
                </Grid>
              ))} 
              </Grid>
              </Box>
              </ul>  
              
              <Button  
                variant="contained"  
                color="primary"  
                startIcon={<AddCircle />}  
                onClick={handleClick}
              >  
                Add New Post  
              </Button>  
            </Paper>  
          </Grid>  
        </Grid> 
      </Box>
    </div>  
  );  
};  
  
export default BlogDashboard;  
