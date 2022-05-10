import Image from "next/image";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Title, Text } from "components";
import { spaces } from "theme";

const Empty = ({ title, description }) => {
  return (
    <EmptyWrapper>
      <Image src="/empty-image.png" width={400} height={464} />
      <StyledTitle level={3} variant="lg">
        {title}
      </StyledTitle>
      <Text>{description}</Text>
    </EmptyWrapper>
  );
};

const EmptyWrapper = styled.div`
  text-align: center;
`;

const StyledTitle = styled(Title)`
  margin: ${spaces[2]} 0 ${spaces[2]};
`;

Empty.PropTypes = {
  /** Title for empty component */
  title: PropTypes.string.isRequired,
  /** Description for empty component */
  description: PropTypes.string.isRequired,
};

export default Empty;
