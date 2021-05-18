import React from "react";
import styled from "styled-components";
import { GeogebraEmbed } from "../GeogebraEmbed";

interface Props {
  title: string;
  rideId: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #e7e7e7;
  padding: 16px;
  border-radius: 8px;
`;

export const RideItem: React.FC<Props> = ({ title, children, rideId }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{children}</p>
      <GeogebraEmbed id={rideId} />
    </Container>
  );
};
