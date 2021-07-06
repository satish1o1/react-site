  
import '../collection-item/collectionitem.styles.scss'
import { connect } from 'react-redux'
import { addItem } from '../../../redux/cart/cartAction'
import CustomButton from '../custom-button/custom-button.component'
const CollectionItem = ({ item , addItem }) => {
   const {id,name, imageUrl, price} = item
   return (
      <div className="collection-item">
         <div className="image" style={{
            backgroundImage: `url(${imageUrl})`
         }
         } />
         <div className="collection-footer">
            <span className="name" >{name.toUpperCase()}</span>
            <span className="price" >{price}$</span>
         </div>
         <CustomButton isinverted className='custom-button' onClick={() => addItem(item)}>ADD TO CART</CustomButton>
      
      </div>
   )
}

const mapDispatchToProps = dispatch => (
   {
      addItem:item =>dispatch(addItem(item))
   }
)

export default connect(null,mapDispatchToProps)(CollectionItem)