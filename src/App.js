import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './searchbar/SearchBar';
import FilterBar from './sidebar/FilterBar';
import PriceRange from './sidebar/PriceRange';
import RamSearch from './sidebar/RamSearch';
import GamingMode from './sidebar/GamingMode';
import ProductList from './products/ProductList';
import Cart from './cart/Cart.js';
import $ from 'jquery';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pcs: [
        {"model": "Dell Inspiron 15", "cpu": "Intel Core i5", "ram": 8, "gpu": "", "price": 800, "img_url": "https://m.media-amazon.com/images/I/816bvxcrVKL._AC_UF1000,1000_QL80_.jpg"},
        {"model": "HP Pavilion x360", "cpu": "AMD Ryzen 5 5500U", "ram": 12, "gpu": "", "price": 900, "img_url":"https://www.bruno.it/media/catalog/product/_/p/_products_hp-pavilion-x360-14-dy1011nl-i5-1155g7-ibrido-2-i-14-dy1011nl.jpeg"},
        {"model": "Asus ZenBook 14", "cpu": "Intel Core i7", "ram": 16, "gpu": "NVIDIA GeForce RTX 1050", "price": 1100, "img_url":"https://laptopmedia.com/wp-content/uploads/2020/11/71Ml0C6HxZL._AC_SL1500_.jpg"},
        {"model": "Acer Swift 5", "cpu": "Intel Core i7", "ram": 16, "gpu": "", "price": 1200, "img_url":"https://www.notebookcheck.it/uploads/tx_nbc2/AcerSwift5SF514-54GT__1_.JPG"},
        {"model": "Lenovo Ideapad Flex 5", "cpu": "AMD Ryzen 7 5700U", "ram": 8, "gpu": "", "price": 850, "img_url":"https://p1-ofp.static.pub/fes/cms/2022/11/22/nj5w1soivufwx2pbxf0b82d5gaxedi352345.png"},
        {"model": "Apple MacBook Pro", "cpu": "Apple M1", "ram": 16, "gpu": "Apple M1 GPU", "price": 1500, "img_url":"https://files.refurbed.com/ii/macbook-pro-2019-133-tb-1625734286.jpg?t=fitdesign&h=600&w=800"},
        {"model": "Microsoft Surface Laptop 3", "cpu": "Intel Core i5", "ram": 32, "gpu": "", "price": 1400, "img_url":"https://m.media-amazon.com/images/I/71jurxIClaL._AC_UF1000,1000_QL80_.jpg"},
        {"model": "Dell XPS 13", "cpu": "Intel Core i7", "ram": 16, "gpu": "", "price": 1600, "img_url":"https://www.europc.com/it/77775-large_default/dell-xps-13-plus-9320-laptop-grigio-intel-core-i7-1280p-16gb-ram-1tb-ssd-13-1920x1200-wuxga-dell-1-anno-di-garanzia-inglese-tastiera-159870.jpg"},
        {"model": "HP Envy x360", "cpu": "AMD Ryzen 9 5900U", "ram": 12, "gpu": "NVIDIA GeForce RTX 1060", "price": 1300, "img_url":"https://kaas.hpcloud.hp.com/PROD/v2/renderbinary/6489670/6489419/con-win-nb-p-weller-22c1-hp-envy-x360-laptop-15-ew0000-specification/con-nb-gidget-22c1-hp-envy-x360-15-es2000-product-image"},
        {"model": "Asus ROG Strix G15", "cpu": "Intel Core i9", "ram": 32, "gpu": "NVIDIA GeForce RTX 3080", "price": 2500, "img_url":"https://www.tradeinn.com/f/13985/139855320/asus-pc-portatile-gaming-rog-strix-g15-g513rc-hn180-15.6-r7-6800h-16gb-512gb-ssd-rtx-3050.jpg"}
      ],

      cpu: ["Intel Core i5", "AMD Ryzen 5 5500U", "Intel Core i7", "AMD Ryzen 7 5700U", "Apple M1", "AMD Ryzen 9 5900U", "Intel Core i9"],

      searchkey:'',

      selectedTypes: {"Intel Core i5":true, "AMD Ryzen 5 5500U":true, "Intel Core i7":true, "AMD Ryzen 7 5700U":true, "Apple M1":true, "AMD Ryzen 9 5900U":true, "Intel Core i9":true},

      maxPrice: 3000,
      minPrice:600,

      maxRam: 32,
      minRam: 8,

      selectedProducts:[],
      gamingPc:[]
    };
  }


  handleSearch = (e) => {
    this.setState({"searchkey":e.target.value});    
  }

  handleTypeSelect = (e) => {     
    let name = e.target.name;
    let selectedTypes = this.state.selectedTypes;
    selectedTypes[name] = !selectedTypes[name];
    this.setState({selectedTypes:selectedTypes});
  }

  handleMaxPrice = (e) => {       
    this.setState({"maxPrice":e.target.value});
  }

  handleMinPrice = (e) => {
    this.setState({"minPrice":e.target.value});
  }
  
  handleMaxRam = (e) => {       
    this.setState({"maxRam":e.target.value});
  }

  handleMinRam = (e) => {
    this.setState({"minRam":e.target.value});
  }


  addToCart = (product) => {
    let selectedProducts = this.state.selectedProducts;
    selectedProducts.push(product);
    this.setState({"selectedProducts":selectedProducts});
  }


  removeFromCart = (position) => {
    let selectedProducts = this.state.selectedProducts;
    selectedProducts.splice(position,1);
    this.setState({"selectedProducts":selectedProducts});
  }


  sendOrder = () => {
    this.setState({selectedProducts:[]});
    alert('Order sent');
  }


  changeCss = () => {
    let b= document.getElementById("button");
    if(b.innerHTML  === "GAMING MODE") {
      b.innerHTML= "ALL"
      b.style.backgroundColor= "#1d1d1d";
      
      $("#root").css("background-color", "#000000");
      $("#divProducts").css("background-color", "#14213d");
      $("#divProducts").css("color", "#fca311");
      $("#divFilter").css("color", "#fca311");

      $("#divCart").css("background-color", "#14213d");
      $("#divCart").css("color", "#fca311");
      let pc= this.state.pcs.filter(p => p.gpu != "");
      this.setState({"gamingPc":pc});
    }
    
    else {
      b.innerHTML= "GAMING MODE"
      b.style.backgroundColor= "#198754";
      
      $("#root").css("background-color", "transparent");
      $("#divProducts").css("background-color", "transparent");
      $("#divProducts").css("color", "#000000");
      $("#divFilter").css("color", "#000000");
      $("#divCart").css("background-color", "transparent");
      $("#divCart").css("color", "#000000");
      this.setState({"gamingPc":[]});
    }
  }


  render () {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch} /> <br/>
        
        <div className="row m-5" id="all"> 
          <div className="col-2 bg-info bg-gradient bg-opacity-25" id='divFilter'> 
            <FilterBar selectedTypes={this.state.selectedTypes} cpus={this.state.cpu} handleTypeSelect={this.handleTypeSelect}/> <br/><br/>
            <PriceRange maxPrice={this.state.maxPrice} minPrice={this.state.minPrice} handleMaxPrice= {this.handleMaxPrice} handleMinPrice = {this.handleMinPrice}/> <br/><br/>
            <RamSearch maxRam={this.state.maxRam} minRam={this.state.minRam} handleMaxRam= {this.handleMaxRam} handleMinRam= {this.handleMinRam}/> <br/>
            <GamingMode changeCss={this.changeCss}/> 
          </div>
          
          <div className="col-7 bg-body-tertiary">
            <ProductList products={this.state.pcs} gamingPc={this.state.gamingPc} searchkey={this.state.searchkey} maxRam={this.state.maxRam} minRam={this.state.minRam} maxPrice={this.state.maxPrice} selectedTypes={this.state.selectedTypes} addToCart={this.addToCart}  minPrice={this.state.minPrice}/>
          </div>
          
          <div className="col-3 bg-light">
            <Cart sendOrder={this.sendOrder} removeFromCart={this.removeFromCart} selectedProducts={this.state.selectedProducts} />
          </div>   
        </div> 
      </div>
    );
  }
}
