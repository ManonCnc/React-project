function Article(props) {
    /*
    constructor(props){
      super(props)
      console.log(this.state)
      this.state = props.state + props.price
      console.log(this.state)
  
    }*/
      return (
      <div>
        <li> {props.name} - Prix : {props.price}€</li>
       </div>
    )
  }

  export default Article