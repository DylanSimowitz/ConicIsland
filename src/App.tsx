import React from "react";
import "./App.css";
import styled from "styled-components";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Header } from "./Header";
import { RideItem } from "./RideItem";
import { Node as MathJax} from "@nteract/mathjax";

const Container = styled.div`
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const MapContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  color: white;
  font-size: 4rem;
  background: #ed9429;
`;

const Disclaimer = styled.p`
  color: white;
  font-size: 1.5rem;
`;

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Heading>Rides</Heading>
        <Disclaimer>Hold right click to interact with rides.</Disclaimer>
        <Container id="rides">
          <RideItem title="Sin Slide" rideId="xezmv7yh">
            Riders of this waterslide walk 150 feet from the base and climb
            stairs to an elevation of 100 feet and are carried down a wave-like
            sin curve to a pool below. The radius of each wave is 9 feet with a
            period of 2pi
              <MathJax>{`r(t)=\\langle3t,9sin(\\frac{1}{2}t),2t\\rangle`}</MathJax>
          </RideItem>
          <RideItem title="Conic Waterslide" rideId="fmeezrkg">
            This ride is a plastic cone that is 8 feet long. Its height is 10
            feet. The blueprint for the ride could be represented as a lowered
            cone intersecting the xy plane. As to not have the rider be stuck at
            the bottom, the bottom part of the cone is cut out to allow space to
            fall into a pool.
              <MathJax>{`(z+1)^2=5x^2+5y^2`}</MathJax>
          </RideItem>
          <RideItem title="Helix Slide" rideId="xxzxmpfq">
            The helix shaped waterslide pictured below has an elevation of 75
            feet and plunges riders into a pool after they have rotated 5.96
            radians around a central support spire containing stairs to reach
            the top of the slide. The radius of the slide is 12 feet and takes
            up about 452 feet of park space not including the pool.
              <MathJax>{`r(t)=\\langle12cos(\\frac{1}{4}t),12sin(\\frac{1}{4}t),t\\rangle`}</MathJax>
          </RideItem>
          <RideItem title="Chip-Slide" rideId="ettfz6we">
            This ride is a plastic hyperbolic paraboloid that is, from tip to
            tip, 12 feet long. Its height is 8 feet. There are ladders leading
            to the highest points that allow sliding down the surface. As to
            avoid injury, the ride has inflatable cushions lining the bottom.
            This diagram only shows the ride itself and discludes the ladders to
            the tops for simplicity. Although it is shown otherwise, the ride
            does not dip below the ground. The ride is offset slightly higher to
            heighten the experience (two hills would be a disappointing ride).
              <MathJax>{`\\frac{x^2}{36}-\\frac{y^2}{25}=\\frac{z}{5}-\\frac{1}{2}`}</MathJax>
          </RideItem>
          <RideItem title="Monkey's Saddle" rideId="grst6tcp">
            This ride is a metal Monkey’s Saddle that is, from tip to tip, 28
            feet long. Its height is 26 feet. The surface serves as a place on
            which to play bumper cars. Although it is shown otherwise, the ride
            does not dip below the ground. The ride is offset slightly higher to
            heighten the experience and increase the stakes to stay on top.
              <MathJax>{`z=x^3-3xy^2+1`}</MathJax>
          </RideItem>
          <RideItem title="Ripple Ride" rideId="auqzbgg3">
            This ride is a plastic ripple-shaped pool that has a circle with
            radius 8 meters as the base and 2 meters as the height, with water
            in the second “wave”. (x by y by z) There are motorized boats that
            rest in the water, circling the track. To avoid injury, the ride
            features walls that are designed to be not steep. This allows anyone
            to easily climb out of the water and to safety if they had fallen
            out.
              <MathJax>{`z=sin(r)+1`}</MathJax>
          </RideItem>
          <RideItem title="Speed" rideId="nwd8xnys">
            This ride is based off the ride Speed, as seen in the Del Mar fair
            and other fairs around the world. It consists of a long “arm” with
            the midpoint of the arm connected to a support attached to the
            ground. Each end of the arm has four seats for riders. The arm
            rotates about the center at very high speeds, more than 10
            revolutions per minute. Instead of the usual rectangular shape of
            the arm seen in other versions of the ride, however, the shape in
            this ride is cylindrical. The radius of the arm is 3 foot long. The
            arm itself is 100 feet long.
              <MathJax>{`x^2+y^2+z^2-2xz=9`}</MathJax>
          </RideItem>
          <RideItem title="Hourglass Rollercoaster" rideId="zaqjkjbk">
            This roller coaster is constructed similar to a helical shape, but
            the top and bottom sections are flat “circles”; the speed of the
            ride rapidly increases as it goes from top to bottom before
            decelerating at the end quickly. Before getting on the ride the
            riders take an elevator to the top level. The height of the ride is
            55 feet, and the radius of rotation of the ride is 15 feet.
              <MathJax>{`r(t)=\\langle 15sin(t),15cos(t),\\frac{55}{1+e^{-t}} \\rangle`}</MathJax>
          </RideItem>
          <RideItem title="Curved Figure-8 Go-Kart Track" rideId="qqbfsjva">
            This ride is a standard go-kart track that is shaped like a figure 8
            when seen from above. However, when viewed from the side, the track
            appears to be a parabolic shape, with the points on the track
            farthest from the center having the highest elevation, and the
            center of the track being ground level. The highest elevation of the
            track is 35 feet, and the straight-line distance from end to end of
            the track is 100 feet.
              <MathJax>{`r(t)=\\langle 50sin(t),50cos(t)sin(t),35sin^2(t) \\rangle`}</MathJax>
          </RideItem>
        </Container>
        <Heading>Park Map</Heading>
        <Disclaimer>
          Zoom with the mouse wheel and pan using left click.
        </Disclaimer>
        <MapContainer id="map">
          <TransformWrapper wheel={{ step: 5 }}>
            <TransformComponent>
              <img src="map.png" alt="test" width="1200px" />
            </TransformComponent>
          </TransformWrapper>
        </MapContainer>
      </div>
      <div id="portal"></div>
    </>
  );
}

export default App;
