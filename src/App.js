import React from 'react';
import './App.css';
import Web3 from 'web3';
import faucetContract from './contracts/Faucet.json';
import detectEthereumProvider from '@metamask/detect-provider';
import NavBar from './component/NavBar/NavBar';
import Faucet from './component/Faucet/Faucet';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dark: false,
      text: 'white',
      background: 'black',
      buttonColor: 'is-dark',
      provider: null,
      web3: null,
      account: null,
      contract: null,
      balance: '0'
    }
  }
  
  setDarkModeText = (text) => {
    if (text === 'black') {
      this.setState({ text: 'white', background: 'black', buttonColor: 'is-dark'});
    } else {
      this.setState({ text: 'black', background: 'white', buttonColor: 'is-light'});
    }
  };

  loadProvider = async () => {
    const provider = await detectEthereumProvider();
  
    if (provider) {
      provider.request({ method: "eth_requestAccounts" });
      this.setState({ web3: new Web3(provider), provider: provider }, async () => {
        const accounts = await this.state.web3.eth.getAccounts();
        const networkId = await this.state.web3.eth.net.getId();
        const deployedNetwork = await faucetContract.networks[networkId];
        this.setState({ contract: deployedNetwork, account: accounts[0] }, async () => {
          const balance = await this.state.web3.eth.getBalance(this.state.contract.address);
          this.setState({ balance: this.state.web3.utils.fromWei(balance, 'ether')});
        });
      });
    } else {
      console.log("Metmask not connected");
    }
  
    
    //  *****WE CAN DO THIS MANUALLY*****
    //
    // let provider = null;
    // if(window.ethereum) {
    //   provider = window.ethereum;
      
    //   try {
    //     await provider.request({method: 'eth_requestAccounts'});
    //   } catch(e) {
    //     console.log("error",e);
    //   }
    // } else if(window.web3) {
    //   provider = window.web3.currentProvider;
    // } else if(!process.env.production) {
    //   provider = new Web3.providers.HttpProvider("http://localhost:7545");
    // }
    // this.setState({web3: new Web3(provider), provider: provider}, async () => {
    //   const accounts = await this.state.web3.eth.getAccounts();
    //   this.setState({account: accounts[0]});
    // });
  }


  
  render() {
    return (
     <div style={{backgroundColor: `${this.state.background}`}}>
        <NavBar text={this.state.text} background={this.state.background} setDarkModeText={this.setDarkModeText}/>
        <Faucet text={this.state.text} balance={this.state.balance} buttonColor={this.state.buttonColor} account={this.state.account} loadProvider={  this.loadProvider}/>
      </div>
  );
  }
}

export default App;
