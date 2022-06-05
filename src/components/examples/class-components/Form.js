import React from 'react';

const productOptions = [
    { value: 'size', label: 'Size' },
    { value: 'color', label: 'Color' },
    { value: 'material', label: 'material' },
    { value: 'weight', label: 'Weight' }
];

// Using Controlled Components Technique (Except file)
export default class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            profilePic: "",
            customerName:"",
            product: "",
            productCount: 0,
            productVariation: [],
            feedback:"",
            termsCondition: false,
            status: "1", 
        };

        this.profilePicRef = React.createRef();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        
        // Destructuring assignment
        const {name, value, type, checked, selectedOptions}  = event.target;
        
        let val;

        if(type === 'checkbox')
            val = checked;
        else if(type === 'select-multiple')
            val = Array.from(selectedOptions, option => option.value);
        else if(type === 'file')
            val = this.profilePicRef.current.value;  // File Name with Path 
        else
            val = value;
      
        // Computed property names   
        this.setState({
            [name]: val    
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        alert(`
            Product variation selected : ${this.state.productVariation}
            Selected File Path is : ${this.state.profilePic}
            Selected File Name is : ${this.profilePicRef.current.files[0].name}`
        );
    }
    
    render(){
        return (
            <div className="container">
                <form name="react-form" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-25"><label htmlFor ="profilePic">Profile Picture:</label></div>
                        <div className="col-75">
                            <input name="profilePic" type="file" ref={this.profilePicRef} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor ="customerName">Customer Name:</label></div>
                        <div className="col-75">
                            <input name="customerName" type="text" checked={this.state.customerName} onChange={this.handleInputChange} />
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor ="product">Select Product:</label></div>
                        <div className="col-75">
                            <select name="product" value={this.state.product} onChange={this.handleInputChange}>
                                <option value="">Please Select</option>            
                                <option value="watch">Watch</option>
                                <option value="shoe">Shoe</option>
                                <option value="shirt">Shirt</option>
                                <option value="mobile">Mobile</option>
                            </select>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor ="productCount">Number of products:</label></div>
                        <div className="col-75">
                            <input name="productCount" type="number" checked={this.state.productCount} onChange={this.handleInputChange} />
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor ="productVariation">Select Variation:</label></div>
                        <div className="col-75">
                            <select name="productVariation" multiple={true} value={this.state.productVariation} onChange={this.handleInputChange}>
                            {productOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                            </select>              
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor ="feedback">Feedback:</label></div>
                        <div className="col-75">
                            <textarea rows="6" name="feedback" value={this.state.feedback} onChange={this.handleInputChange} />
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor ="termsCondition">Terms and Condition:</label></div>
                        <div className="col-75">
                            <input name="termsCondition" type="checkbox" checked={this.state.termsCondition} onChange={this.handleInputChange} />
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor ="termsCondition">Status:</label></div>
                        <div className="col-75">
                            <input name="status" type="radio" value="1" checked={this.state.status === "1"} onChange={this.handleInputChange} /> Active
                            <input name="status" type="radio" value="0" checked={this.state.status === "0"} onChange={this.handleInputChange} /> In-active
                        </div>    
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-75">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}