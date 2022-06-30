import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

import { ReactComponent as CrossIcon } from "./cross.svg";

const fadeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledAlertOverlay = styled.div`
    top: 0;
    left: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    animation: ${fadeOut} 0.27s linear;
    z-index: 1;
`;

const StyledAlert = styled.div`
    font-size: 18px;
    line-height: 1.2;
    text-align: center;
    min-height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin-bottom: 2rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 80vw;
    padding-left: 3rem;
    padding-right: 3rem;
    animation: ${fadeOut} 0.27s linear;
    z-index: 2;

    ${(props) => {
        switch (props.color) {
            case "error":
                return `
                    background-color: #EB5757;
                    color: #fff;
                `;
            case "warning":
                return `
                    background-color: #FFD12F;
                    color: #1513A0;
                `;
            default:
                return `
                    background-color: #605DEC;
                    color: #fff;
                `;
        }
    }}
`;

const StyledCross = styled(CrossIcon)`
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    position: absolute;
    cursor: pointer;
    fill: currentColor;
    transition: 0.27s;

    &&:hover {
        opacity: 0.5;
    }
`;

const Alert = ({ children, color, onClose }) => {
    return (
        <>
            <StyledAlert color={color}>
                {children}
                <StyledCross onClick={onClose} />
            </StyledAlert>
            <StyledAlertOverlay />
        </>
    );
};

Alert.propTypes = {
    children: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClose: PropTypes.func,
};

export default Alert;
