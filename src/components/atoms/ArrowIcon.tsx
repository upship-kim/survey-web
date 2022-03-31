import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

interface IconProps {
    isActive: boolean;
}
const ArrowIcon = ({ isActive }: IconProps) => {
    return isActive ? (
        <MdOutlineKeyboardArrowUp size={30} />
    ) : (
        <MdOutlineKeyboardArrowDown size={30} />
    );
};

export default ArrowIcon;
