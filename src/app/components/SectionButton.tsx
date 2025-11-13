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
        <div className={`z-999 flex flex-col justify-center items-center text-indigodye transition-colors duration-200 hover:text-honolulublue`} onClick={buttonAction}>
            {up && <MaterialIcon name="MdOutlineKeyboardDoubleArrowUp" size={iconSize} />}
            <button className="text-md sm:text-lg">{label}</button>
            {!up && <MaterialIcon name="MdOutlineKeyboardDoubleArrowDown" size={iconSize} />}
        </div>
    )
}