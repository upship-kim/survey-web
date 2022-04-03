import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface IconProps {
    isActive: boolean;
}
const PlusMinusIcon = ({ isActive }: IconProps) => {
    return isActive ? (
        <FaMinus size={20} color={"gray"} />
    ) : (
        <FaPlus size={20} color={"gray"} />
    );
};

export default PlusMinusIcon;
