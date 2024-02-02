
export function NextArrow(props) {
  return (
    <div className={props.className}
    style={{...props.style,backgroundColor:"#fabac0"}}
    onClick={props.onClick}
    >
        
    </div>
  )
}

export function PrevArrow(props) {
    return (
      <div className={props.className}
      style={{...props.style,backgroundColor:"#fabac0"}}
      onClick={props.onClick}
      >
          
      </div>
    )
  }

