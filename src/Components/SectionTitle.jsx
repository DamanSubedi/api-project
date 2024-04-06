
import '../index.css'

export default function SectionTitle({title, }){
    return(
<div className="section-title">
    <h3>{title}</h3>
    <div className="underline"></div>
</div>
        )
}