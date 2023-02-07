export const ModalAddsPet = () => {
    return <div>
        <h3>Add pet</h3>
        <form>
            <label>Name pet
                <input/>
            </label>
            <label>Date of birth
                <input/>
            </label>
            <label>Breed
                <input/>
            </label>
            <button type="submit">Next</button>
            <button type="button">Cancel</button>            
        </form>
        <form>
            <p>Add photo and some comments</p>
            <input type="file"/>
            <label>Comments
                <input/>
            </label>
            <button type="submit">Next</button>
            <button type="button">Cancel</button>
        </form>
    </div>
}