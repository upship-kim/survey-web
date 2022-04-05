import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import styled from "styled-components";

interface IconProps {
    isActive: boolean;
    onClick?: () => void;
}
const PlusMinusIcon = ({ isActive, onClick }: IconProps) => {
    return isActive ? (
        <Minus onClick={onClick} size={15} />
    ) : (
        <Plus onClick={onClick} size={15} />
    );
};

export default PlusMinusIcon;

const Plus = styled(FaPlus)`
    color: #97bdaf;
    padding: 0.4rem 0 0 0;
    margin-top: 10px;
    height: 1rem;
    min-width: 1rem;
    max-width: 1rem;
`;
const Minus = styled(FaMinus)`
    color: #acacac;
    padding: 0.4rem;
    margin-top: 10px;
    height: 1rem;
    min-width: 1rem;
    max-width: 1rem;
`;
