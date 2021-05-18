import React, { useState } from "react";
import styled from "styled-components";
import { GeogebraEmbed } from "../GeogebraEmbed";
import { Button } from "../Header";
import usePortal from "../hooks/usePortal";
import { Modal } from "../Modal";

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
  const [open, setOpen] = useState(false);
  const handleClick = () => {
      setOpen(!open)
  };
  const Portal = usePortal("#portal", Modal);
  return (
    <Container>
      <h2>{title}</h2>
      <p>{children}</p>
      {/* <Button onClick={handleClick}>View Ride</Button> */}
          <GeogebraEmbed id={rideId} />
      {open && (
        <Portal>
          <GeogebraEmbed id={rideId} />
        </Portal>
      )}
    </Container>
  );
};
