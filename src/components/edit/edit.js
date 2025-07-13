import './edit.css';
import Data from '../../classes/data';
import { useStorage } from '../../StorageContext.js';

function Edit() {
    const {storage, setStorage} = useStorage();
    const handleAdd = () => setStorage(Data.add(document.querySelector('.field').value));

    return (
        <div className="edit">
            <div>
                <input className="field" type="text"></input>
                <input className='add' type="submit" value="add" onClick={() => {handleAdd('text')}}></input>
            </div>
        </div>
    );
}

export default Edit;