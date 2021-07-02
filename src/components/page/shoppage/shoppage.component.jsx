import CollectionPreview from '../../component/collection-preview/collectionpreview.component'
import React from 'react'
import SHOPDATA from './shopdata'

class ShopPage extends React.Component{
   constructor(props) {
      super(props)
      this.state = {
         collections:SHOPDATA
      }
   }

   render() {
      const {collections} = this.state
      return (
   
         <div className="shoppage">
            {
               collections.map(({ id,...otherCollectionProps }) =>
                  <CollectionPreview key={id} {...otherCollectionProps}/>)
            }
         </div>
      )

      
      }
}

export default ShopPage