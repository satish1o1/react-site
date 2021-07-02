import CollectionItem from '../../component/collection-item/collectionitem.component'
import '../collection-preview/collectionpreviw.styles.scss'
const CollectionPreview = ({ title, items }) =>
(
   <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <hr className= "line"/>
      <div className="preview">
         {
            items.filter((item,no) => no<4).map(({id,...otherItemProps}) => (
                  <CollectionItem key={id} {...otherItemProps}/>
            )
            )
         }
      </div>
   </div>
)

export default CollectionPreview