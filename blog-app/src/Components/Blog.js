import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: 'Tiktok', url: 'https://www.tiktok.com/@thenickblackson' },
  { title: 'WRESTLING', url: 'https://www.youtube.com/watch?v=KybuIy0wKXk&ab_channel=Wrestlinghistory' },
  { title: 'YouTubers', url: 'https://www.youtube.com/channel/UC987KAYF47MMgtGfuTnZeVw/channels?view=56&shelf_id=0' },
  { title: 'Instagram', url: 'https://www.instagram.com/nicolasblackson/?hl=en' },
];

const mainFeaturedPost = {
  title: 'Nicolas Blackson',
  description:
    "He's a Wrestling loving, Food eating, Tiktok making, Youtube watching, Son of a gun. And YOU CANT TEACH THAT!!!",
  image: 'https://lh3.googleusercontent.com/83RShz5s-TVTnXgNRJ_iZQAWfs4tYfN60xfFFsspfoRmBXesCDt3gdhfOMRjAdqjIEye2LuXTK1chL-j50Uc1KfPWCNs8extHrz_31PcCPOeab4F0xXzOXHBc75UbkYsFQRHUimpfO1v2PfninwPiN6afDEUKHQCnzXHHnZoewIxm188GI45trAhfqlvsYRMiWWlk8YgflrJhnRNU7stwvn8sPwtzcCS5k-iWYHOP-42bHob6_F5klBN_bjXDKC87iF_fTS5DibbPDAGQdyQyEZ04cHAHYuZxm_YrrfSf5sL7QZs2FhsMFU7ufa4WY_oy4ksmwoXmXoolRszsObh_gVoyVkTFx_-_9rXygdaZSgO5yywQY4KQyfhHU-9_wXb2KuRjGloJOhJ9bBcWqxvZ6tRfqSVySDfYc-uxulNO2qeWWJ2sXiYZfqtcAv1ao42XLs-1RJPaypOgs1F603fKHi1jT2BiYAr_cO9QELxVIhYuI6fU9qDydIlUBlPgvB-Zlk3tKPidOSdH-gQxQzMxtCivW8EU1Ajt2uHwKgBlOPYotcuqnBL3uoIojldVtuPKAgQli3eUox7FrmWPiE3_JEsYkCaLPE1K5WYwWwZ2OHFXlAOmf5PzG47aqlIuNUr1ZYVrA1gtHrd7GNGr-q9gnfIImHCKl_k-Lm1FCDUpbAYQLDHG_7STtupIxlxCuM0imDuvsf2MtpQIjPUdzmcNgzql07MLP_EinO60E4IZIm9b_jY_hLtmO2Q79MUkCC0MVAd5edqvi5urqlGdos9ALCztPcXHcf05kN7_k2GuLZo0lsxr03cytjV1zd960J-bm231joOKbTVw0gKwU0yWNCp_TmBMZeqJtzXPEYS03Xvi1tiBTmQ6ex9XasU_F40yrAtIqgKB02WNVH3O3L3BYEZEgoleY0excd3v4jZmwU4HZoZ=w1408-h758-no?authuser=0',
  imageText: 'main image description',
  linkText: 'hi',
};

const featuredPosts = [
  {
    title: 'My Tiktok',
    date: '07/11/2022',
    description:
      'Tiktok is where I make fun, entertaining videos that have amassed over 100M+ veiws',
    image: 'https://i1.sndcdn.com/avatars-y1pDH92IzRbVMHEm-Y526VQ-t240x240.jpg',
    imageLabel: 'Image Text',
    LinkText
    
  },
  {
    title: 'My love for Wrestling',
    date: '07/11/2022',
    description:
      "Wrestling is a Broadway play with GIANTS. Its the art of violence that attracts the thousands of fans in arenas DAILY",
    image: 'https://pbs.twimg.com/media/FUqhMiRXwAIrRPv?format=jpg&name=small',
    imageLabel: 'Image Text',
    
  },
  {
    title: 'YouTube Favorites',
    date: 'Nov 11',
    description:
      "Youtubers at this point are main stream, by pulling in 100's of MILLIONS of views weekly. Some of my favorite are the Sidemen, YourMomsHouse Podcast, and many many more",
    image: 'https://yt3.ggpht.com/ytc/AKedOLQzfwH4WtPL-tH54DS76e3goKXVIHwAHs23PStGXQ=s176-c-k-c0x00ffffff-no-rj',
    imageLabel: 'Image Text',
    
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}