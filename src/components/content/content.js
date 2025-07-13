import './content.css';
import SVG_delete from '../content/svg/delete.js';
import Data from '../../classes/data';
import { useStorage } from '../../StorageContext.js';

function Content() {
    const {storage, setStorage} = useStorage();
    const handleRemove = (idx) => setStorage(Data.remove(idx));

    const renderedItems = [];
    for (let i = 0; i < Data.storage.length; i++) {
        const quest = Data.storage[i];
        renderedItems.push(
            <div className="quest" key={i + 1}>
                <div className="text">{i + 1}. {quest}</div>
                <button id={i} className="delete" onClick={(e) => {handleRemove(e.currentTarget.id)}}>
                    <SVG_delete></SVG_delete>
                </button>
            </div>
        );
    }
  
    return (
        <div className="content">
            <div className="todolist">
                {renderedItems}
            </div>
        </div>
    );
}

export default Content;