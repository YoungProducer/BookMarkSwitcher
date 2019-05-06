import React from "react";

import { FlexRow, FlexColumn } from "../modules/AlignBlocks.styled";

import {
  Wrapper,
  Avatar,
  Name,
  InfoBlock,
  SignOut,
  Information
} from "./PrivateCabinetHeader.styled";

const PrivateCabinetHeader = () => {
  return (
    <Wrapper>
      <InfoBlock align="flex-start">
        <Name>Cobilo Popilo</Name>
        <FlexColumn>
          <SignOut>Sign out</SignOut>
          <SignOut>Change profile</SignOut>
        </FlexColumn>
      </InfoBlock>

      <InfoBlock align="center">
        <Avatar src="/img/avatar-round-1.png" />
      </InfoBlock>

      <InfoBlock align="flex-start">
        <Information>Florida, st. Riverton</Information>
        <Information>+3904594314</Information>
      </InfoBlock>
    </Wrapper>
  );
};

export default PrivateCabinetHeader;
