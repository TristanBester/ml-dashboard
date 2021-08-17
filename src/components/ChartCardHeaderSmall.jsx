import '../styles/ChartCardHeaderSmall.css'

export default function ChartCardHeaderSmall({ heading, label, leftName, middleName, rightName, navigator }) {

    if (navigator) {
        return (
            <div className="ChartHeaderContainerSmall">
                <div className="HeaderContainerSmall">
                    <label className="ChartNameLabelSmall">{heading}</label>
                    <label className="ChartTypeLabelSmall">{label}</label>
                </div>
                <div className="ChartTypeNavigatorSmall">
                    <button className="ChartButtonSmall">{leftName}</button>
                    <button className="ChartButtonSmall">{middleName}</button>
                    <button className="ChartButtonSmall">{rightName}</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="HeaderContainerSmall">
                <label className="ChartNameLabelSmall">{heading}</label>
                <label className="ChartTypeLabelSmall">{label}</label>
            </div>
        )
    }
}
