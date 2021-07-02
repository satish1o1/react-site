import '../collection-item/collectionitem.styles.scss'
const CollectionItem = ({name,imageUrl,price}) =>
(
   <div className="collection-item">
   <div className="image" style={{
      backgroundImage: `url(${imageUrl})`
   }
   } />
   <div className="collection-footer">
      <span className="name" >{name.toUpperCase()}</span>
      <span className="price" >{price}$</span>
   </div>
   </div>
)


export default CollectionItem