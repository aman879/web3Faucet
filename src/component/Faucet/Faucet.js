import React from "react";

const Faucet = ({text,wallet, balance, buttonColor,account, loadProvider, addFunds, withdrawFunds}) => {
    return (
        <div className="faucet-wrapper">
            <div className="faucet">
            <div className="ml-5" style={{color: text}}>
                {account 
                    ?   <><span>Account:</span>
                        <h1>{account}</h1>
                        </>
                    : <h1>Connect your wallet</h1>}   
            </div> 
                        <div className="balance-view is-size-2 my-4" style={{color: text}}>
                Current Balance: <strong style={{color: `${text}`}}>{balance.toString()}</strong> ETH
                </div>
                {wallet 
                    ? <button className={`button is-rounded mr-2 ${buttonColor}`} disabled={account} style={{color: `${text}`}} onClick={loadProvider}>{account? 'Connected' : 'Connect'}</button>
                    : <button className={`button is-rounded is-warning mr-2 ${buttonColor}`} disabled={account} style={{color: `${text}`}} onClick={loadProvider}>
                    <a target='_blank' rel="noreferrer" href="https://docs.metamask.io">Install metamask</a>
                </button>
                }  
                <button className={`button is-rounded mr-2 ${buttonColor}`} disabled={!account} style={{color: `${text}`}} onClick={addFunds}>Donate</button>
                <button className={`button is-rounded ${buttonColor}`} disabled={!account} style={{color: `${text}`}} onClick={withdrawFunds}>Withdraw</button>
            </div>
        </div>
    )
}

export default Faucet