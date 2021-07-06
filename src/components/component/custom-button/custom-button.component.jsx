import './custom-button.styles.scss'

const CustomButton = ({children,isGoogle,isinverted,...otherProps}) => 
 (
   <button className={`${isinverted ? 'inverted':''} ${isGoogle ? 'google':''} custom-button`}     { ...otherProps } >
         {children}
      </button>

 )

export default CustomButton