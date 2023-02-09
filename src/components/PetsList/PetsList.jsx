export const PetsList = ({pets, onDelete}) => {
    return <ul>
    <li>
        <article>
            <button type="button">delete</button>
            <img alt="" src=""/>
            <ul>
                <li>
                    <p>Name:</p>
                    <p></p>
                </li>
                <li>
                    <p>Date of birth:</p>
                    <p></p>
                </li>
                <li>
                    <p>Breed:</p>
                    <p></p>
                </li>
                <li>
                    <p>Comments:</p>
                    <p></p>
                </li>
            </ul>
        </article>
    </li>            
</ul>
}