import styled from "styled-components";
import PropTypes from "prop-types";
import { typography, radii, spaces, colors } from "theme";

const StatusCard = ({
  className,
  color,
  title,
  description,
  value,
  hasChart,
}) => {
  return (
    <StyledStatusCard className={className} color={color} hasChart={hasChart}>
      <div className="status-info">
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Value>{value}</Value>
      </div>

      {hasChart && <Chart />}
    </StyledStatusCard>
  );
};

const StyledStatusCard = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.hasChart && spaces[10]};
  width: 100%;
  max-width: 370px;
  background-color: ${(props) => props.color};
  text-align: ${(props) => !props.hasChart && "center"};
  padding: ${spaces[12]} ${spaces[8]};
  border-radius: ${radii.lg};
`;

const Title = styled.h2`
  font-size: ${typography.body.xl.fontSize};
  font-weight: 600;
`;

const Description = styled.p`
  font-size: ${typography.body.sm.fontSize};
  font-weight: 300;
  color: ${colors.grayPalette[500]};
`;

const Value = styled.span`
  font-size: ${typography.body["3xl"].fontSize};
  font-weight: 700;
`;

const Chart = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: gray;
`;

StatusCard.propType = {
  /** Color of StatusCard */
  color: PropTypes.string.isRequired,
  /** Title of StatusCard */
  title: PropTypes.string.isRequired,
  /** Description of StatusCard */
  description: PropTypes.string.isRequired,
  /** Value of StatusCard */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** Whether to show chart or not */
  hasChart: PropTypes.bool,
};

export default StatusCard;
