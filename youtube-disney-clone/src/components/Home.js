import styled from "styled-components";

import React from 'react'
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch(doc.data().type) {
          case "recommend":

            recommends.push({id: doc.id, ...doc.data()});
            break;

          case "new":
            newDisneys.push({id: doc.id, ...doc.data()});
            break;

          case "original":
            originals.push({id: doc.id, ...doc.data()});
            break;

          case "trending":
            trending.push({id: doc.id, ...doc.data()});
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      )
    })
  }, [userName])
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />

    </Container>
  )
}

const Container = styled.div`
position: relative;
background: url('/images/home-backgroung.png');
top: 72px;
overflow-x: hidden;
min-height: calc(100vh - 250px);
display: block;
padding: 0 calc(3.5vw + 5px);

&:after {
  background: url("/images/home-background.png") center center / cover
    no-repeat fixed;
  content: "";
  position: absolute;
  inset: 0px;
  opacity: 1;
  z-index: -1;
}
`;
export default Home;
