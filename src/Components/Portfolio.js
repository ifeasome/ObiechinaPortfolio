import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../portfolio/01.jpg";
import project2 from "../portfolio/02.jpg";
import project3 from "../portfolio/03.jpg";
import project4 from "../portfolio/04.jpg";
import project5 from "../portfolio/06.jpg";
import project6 from "../portfolio/08.jpg";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Marvel Character Cards",
    description: `Utilising two server side API, this application creates a Marvel Hero Card displayed on a 
    HTML5 web browser with a thirty-second (30) soundtrack included.`,
    image: project1,
    url: "https://ifeasome.github.io/Marvel-Cards/",
    github: "https://github.com/ifeasome/Marvel-Cards"
  },
  {
    name: "Lego Employee Directory",
    description: `This React employee directory allows you to gain quick access to your entire employee information.\
    You will be able to filter employees by name and sort it also by name.`,
    image: project2,
    url: "https://ifeasome.github.io/react-emp-directory/",
    github: "https://github.com/ifeasome/react-emp-directory"
  },
  {
    name: "Game Quiz",
    description: `A timed coding quiz with multiple-choice questions.\
    This app runs on HTML5 browsers, and features dynamically updated HTML and CSS powered by JavaScript.`,
    image: project3,
    url: "https://ifeasome.github.io/Game-Quiz/",
    github: "https://github.com/ifeasome/Game-Quiz"
  },
  {
    name: "Handling The Burger",
    description: `This application is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. 
    It follows the MVC design pattern; uses Node and MySQL to query and route data in app,\
    and Handlebars to generate HTML.`,
    image: project4,
    github: "https://github.com/ifeasome/Burger-Express-Handlebars"
  },
  {
    name: "My Java Tech News",
    description: `A JAVA powered news aggregator site with CRUD capabilities and a Thymeleaf front-end. 
    Users are able to create an account, log in, share links/websites, comment and upvote.`,
    image: project5,
    github: "https://github.com/ifeasome/tech-news-java-api"
  },
  {
    name: "I Am Mage",
    description: `An online image repository that allows users to sign in 
    using Single Sign-On (sso) to upload images that tells an ongoing story based on uploaded images by other users. 
    Think of pictionary....but different.
    `,
    image: project6,
    url: "https://i-am-mage-899e0.web.app/login",
    github: "https://github.com/ifeasome/i-am-mage"
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body5" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary" href={project.github}>
                  Github
                </Button>
                <Button size="medium" color="primary" href={project.url}>
                  Live Demo 
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;