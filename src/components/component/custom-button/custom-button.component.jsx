import './custom-button.styles.scss'

const CustomButton = ({children,isGoogle,...otherProps}) => 
 (
   <button className={`${isGoogle ? 'google':''} custom-button`}     { ...otherProps } >
         {children}
      </button>

 )

export default CustomButton