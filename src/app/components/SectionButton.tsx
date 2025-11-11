import MaterialIcon from "@/app/components/MaterialIcon";
import useResponsiveIconSize from "@/app/hooks/useResponsiveIconSize";

type sectionButtonProps = {
    up?: boolean,
    label?: string,
    buttonAction: () => void;
}

export default function SectionButton({
    up = true,
    label = "label",
    buttonAction,
}: sectionButtonProps) {
    const iconSize = useResponsiveIconSize({
        base: 24,
        sm: 24,
        md: 32,
        lg: 36,
    });

    return(
        <div className={`flex flex-col justify-center items-center ${up ? "mt-3" : "mb-3"} text-indigodye hover:text-honolulublue`} onClick={buttonAction}>
            {up && <MaterialIcon name="MdOutlineKeyboardDoubleArrowUp" size={iconSize} />}
            <button>{label}</button>
            {!up && <MaterialIcon name="MdOutlineKeyboardDoubleArrowDown" size={iconSize} />}
        </div>
    )
}