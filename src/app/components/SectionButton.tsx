import MaterialIcon from "@/app/components/MaterialIcon";

type sectionButtonProps = {
    up?: boolean,
    label?: string,
    imgSize?: number, 
    buttonAction: () => void;
}

export default function SectionButton({
    up = true,
    label = "label",
    imgSize = 24,
    buttonAction,
}: sectionButtonProps) {
    return(
        <div className={`flex flex-col justify-center items-center ${up ? "mt-3" : "mb-3"} text-indigodye hover:text-honolulublue`} onClick={buttonAction}>
            {up && <MaterialIcon name="MdOutlineKeyboardDoubleArrowUp" size={imgSize} />}
            <button>{label}</button>
            {!up && <MaterialIcon name="MdOutlineKeyboardDoubleArrowDown" size={imgSize} />}
        </div>
    )
}