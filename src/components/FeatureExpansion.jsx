import "../styles/FeatureExpansion.css"
import { useParams } from 'react-router-dom'

export default function FeatureExpansion() {

    let {featureId} = useParams()

    return (
        <div className="FeatureExpansion">
            Currently expanded feature ID: {featureId}
        </div>
    )
}
