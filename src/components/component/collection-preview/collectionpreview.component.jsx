import CollectionItem from '../collection-item/collectionitem.component'
import '../collection-preview/collectionpreviw.styles.scss'
const CollectionPreview = ({ title, items }) =>
(
   <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <hr className= "line"/>
      <div className="preview">
         {
            items.filter((item,no) => no<4).map((item) => (
                  <CollectionItem key={item.id} item = {item}/>
            )
            )
         }
      </div>
   </div>
)

export default CollectionPreview