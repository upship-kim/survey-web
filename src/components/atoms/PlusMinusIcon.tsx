import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import styled from "styled-components";

interface IconProps {
    isActive: boolean;
    onClick?: () => void;
}
const PlusMinusIcon = ({ isActive, onClick }: IconProps) => {
    return isActive ? <Minus onClick={onClick} /> : <Plus onClick={onClick} />;
};

export default PlusMinusIcon;

const Plus = styled(FaPlus)`
    background-color: #97bdaf;
    color: white;
    height: 0.9rem;
    width: 1.4rem;
    border-radius: 20px;
    padding: 0.4rem;
`;
const Minus = styled(FaMinus)`
    background-color: #acacac;
    color: white;
    height: 0.9rem;
    width: 1.4rem;
    border-radius: 20px;
    padding: 0.4rem;
`;
