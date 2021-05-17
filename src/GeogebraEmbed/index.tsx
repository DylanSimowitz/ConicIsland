import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

interface Props {
  id: string;
  width?: number;
  height?: number;
}

export const GeogebraEmbed = ({ id, width = 1600, height = 900 }: Props) => {
  return (
    <Container>
      <StyledIframe
        scrolling="no"
        title="helix slide"
        src={`https://www.geogebra.org/material/iframe/id/${id}/width/${width}/height/${height}/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false`}
        width={width}
        height={height}
      >
        {" "}
      </StyledIframe>
    </Container>
  );
};
