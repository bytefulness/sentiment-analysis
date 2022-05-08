import Image from "next/image";
import styled from "styled-components";
import PropTypes from "prop-types";
import { typography, spaces } from "theme";

const Avatar = ({ className, image, name, isOnline }) => {
  return (
    <StyledAvatar className={className} isOnline={isOnline}>
      <ImageWrapper>
        <Image src={image} layout="fill" objectFit="cover" />
      </ImageWrapper>

      <Name>{name}</Name>
    </StyledAvatar>
  );
};

const StyledAvatar = styled.div`
  position: relative;
  width: 64px;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    top: 8px;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => (props.isOnline ? "#22b022" : "#f50707")};
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: ${spaces[2]};
  overflow: hidden;
`;

const Name = styled.span`
  font-size: ${typography.body.sm.fontSize};
  font-weight: 500;
`;

Avatar.propTypes = {
  /** Image src of Avatar */
  image: PropTypes.string.isRequired,
  /** Name of Avatar */
  name: PropTypes.string.isRequired,
  /** Status of Avatar */
  isOnline: PropTypes.bool.isRequired,
};

export default Avatar;
