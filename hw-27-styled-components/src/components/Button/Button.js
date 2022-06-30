import styled from "styled-components";

const StyledButton = styled.button`
    font-size: 16px;
    line-height: 1.2;
    height: 40px;
    padding: 9px 16px;
    border-radius: 4px;
    margin-bottom: 1rem;
    border: 1px solid currentColor;
    cursor: pointer;
    transition: 0.27s;

    &&:disabled {
        pointer-events: none;
        color: #7c8db0;
        border-color: currentColor;
        background-color: tranparent;
    }

    ${(props) => {
        switch (props.color) {
            case "primary":
                return `
                    border-color: transparent;
                    background-color: #605DEC;
                    color: #fff;

                    &&:hover {
                        background-color: #1513A0;
                    }

                    &&:disabled {
                        background-color: rgba(203, 212, 230, .3);
                    }
                `;
            default:
                return `
                    background-color: transparent;
                    color: #605DEC;

                    &&:hover {
                        background-color: #E9E8FC;
                    }
                `;
        }
    }}
`;

const StyledLargeButton = styled(StyledButton)`
    font-size: 18px;
    height: 48px;
    padding: 12px 20px;
`;

const StyledMiddleButton = styled(StyledButton)`
    padding: 12px 20px;
    height: 48px;
`;

const Button = ({ children, color, size, disabled, onClick }) => {
    if (size === "large") {
        return (
            <StyledLargeButton color={color} disabled={disabled}>
                {children}
            </StyledLargeButton>
        );
    } else if (size === "middle") {
        return (
            <StyledMiddleButton color={color} disabled={disabled}>
                {children}
            </StyledMiddleButton>
        );
    }

    return (
        <StyledButton
            color={color}
            disabled={disabled}
            onClick={() => onClick()}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
