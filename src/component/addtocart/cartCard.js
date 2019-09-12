import React from "react"
import './cartcard.css'
import Navbar from '../appbar'
export default class Cartcard extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            cartArray: []
        }
    }


    passCartData(props) {
        
        let {cartArray} = this.state
       let data = {
            title: props.location.state.data.title,
            img: props.location.state.data.img,
            price: props.location.state.data.price,
            count: this.state.count,
            discription:props.location.state.data.discription,
        }
        cartArray.push(data)
        localStorage.setItem("cartArray", JSON.stringify(cartArray))
        console.log(cartArray)
        this.setState({
            cartArray : this.state.cartArray
        })
    }
    componentDidMount(){
        var productData = localStorage.getItem('cartArray')
        if (productData){
            this.setState({
                cartArray : JSON.parse(productData)
            })
        }
    }


    render() {
        console.log(this.state)
        let product_data = this.props.history.location.state.data
        return (
            <div>
                <Navbar data={this.state.cartArray} />
                <div className="box" tabindex="-1"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-5">
                                    
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <img className=" w-100"
                                                    src={product_data.img}
                                                    />
                                            </div>

                                        </div>
                                    </div>
                                    {/* </div> */}
                                    <div className="col-lg-7">
                                        <h2 className="h2-responsive product-name">
                                            <strong>{product_data.title}</strong>
                                        </h2>
                                        <h4 className="h4-responsive">
                                            <span className="green-text">
                                                <strong>PKR {product_data.price} </strong>
                                            </span>
                                            <span className="grey-text">
                                                <small>
                                                    <s>  PKR {product_data.price + 20} </s>
                                                </small>
                                            </span>
                                        </h4>

                                        <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

                                            <div className="card">

                                                <div className="card-header" role="tab" id="headingOne1">
                                                    <span data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                                    >
                                                        <h5 className="mb-0">
                                                            Discription <i className="fas fa-angle-down rotate-icon"></i>
                                                        </h5>
                                                    </span>
                                                </div>

                                                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                                                    data-parent="#accordionEx">
                                                    <div className="card-body">
                                                    {product_data.discription}
                  </div>
                                                </div>

                                            </div>



                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h3 style={{ textAlign: "center" }}>Quantity:</h3>
                                                    <div style={{ display: 'flex', margin: "auto", justifyContent: "space-between", backgroundColor: "rgb(164,86,179)", width: "170px", padding: "0px" }}>
                                                        <button className="btn btn-secondary" style={{ width: "20px", padding: "20px", height: "20px" }} onClick={() => { this.state.count > 0 && this.setState({ count: this.state.count - 1 }) }}> <span style={{ display: "inline-block", marginTop: "-15px", position: "absolute", fontSize: "20px" }} >-</span></button>
                                                        <p style={{ color: "white", fontWeight: "bold", marginTop: "2px" }}> <span style={{ paddingTop: "10px", display: "inline-block" }}> {this.state.count}</span></p>
                                                        <button className="btn btn-secondary" style={{ width: "20px", padding: "20px", height: "20px" }} onClick={() => this.setState({ count: this.state.count + 1 })}> <span style={{ display: "inline-block", marginTop: "-15px", position: "absolute", fontSize: "20px" }}>+</span> </button>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="text-center">



                                                {this.state.count ?
                                                    <button className="btn btn-primary"
                                                        onClick={this.passCartData.bind(this, this.props)}>Add to Cart <i className="fas fa-cart-plus ml-2" aria-hidden="true"></i>
                                                    </button> :

                                                    <button className="btn btn-primary"
                                                        onClick={() => alert("please select quantity")}>Add to Cart <i className="fas fa-cart-plus ml-2" aria-hidden="true"></i>
                                                    </button>
                                                }


















                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}