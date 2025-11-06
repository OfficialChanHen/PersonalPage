import { IconBaseProps } from "react-icons";
import * as MDIcons from "react-icons/md";

type MaterialIconProps = IconBaseProps & {
    name?: keyof typeof MDIcons;
    size?: number;
    className?: string;
};

export default function MaterialIcon({ 
    name = "MdHideImage", 
    size = 24, 
    className
}: MaterialIconProps) {
    const Icon = MDIcons[name];

    return <Icon className={className} size={size} />
}