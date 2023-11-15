import React,{useState, useEffect} from "react";

const Faucet = ({text, balance, buttonColor,account, loadProvider}) => {
    const [disable, setDisable] = useState(null);
    useEffect(() => {
        if(account) {
            setDisable("disabled");
        }
    },[account]);
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
                <button className={`button is-rounded mr-2 ${buttonColor}`} disabled={disable} style={{color: `${text}`}} onClick={loadProvider}>{account? 'Connected' : 'Connect'}</button>
                <button className={`button is-rounded mr-2 ${buttonColor}`} style={{color: `${text}`}}>Donate</button>
                <button className={`button is-rounded ${buttonColor}`} style={{color: `${text}`}}>Withdraw</button>
            </div>
        </div>
    )
}

export default Faucet