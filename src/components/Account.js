// Account.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw, addInterest, applyCharges } from '../store/accountReducers';

// Access the balance from the Redux store
const account = () => {
    const [depositAmount, setDepositAmount] = useState('');
    const [withdrawalAmount, setWithdrawalAmount] = useState('');

    const balance = useSelector((state) => state.account.balance);
    // Initiating the dispatch variable using the useDispatch function.
    const dispatch = useDispatch();

    //Event handler for Deposit
    const handleDeposit = (e) => {
        e.preventDefault();
        if (depositAmount !== '') {
            // Dispatch the deposit action with the input amount
            dispatch(deposit(parseFloat(depositAmount)));
            setDepositAmount('');
        }
    };
    //Event handler for Withdrawal
    const handleWithdraw = (e) => {
        e.preventDefault();
        if (withdrawalAmount !== '') {
            // Dispatch the withdraw action with the input amount
            dispatch(withdraw(parseFloat(withdrawalAmount)));
            setWithdrawalAmount('');
        }
    };
    //Event handler for adding interest
    const handleAddInterest = (e) => {
        e.preventDefault();
        // Dispatch the addInterest action
        dispatch(addInterest());
    };
    //Event handler for applying charges
    const handleApplyCharges = (e) => {
        e.preventDefault();
        // Dispatch the applyCharges action
        dispatch(applyCharges());
    };

    return (
        <div>
            {/* Displaying the state or balance variable we have initiated earlier
            using the useSeletor function*/}
            <h1>Account Balance: {balance}</h1>
            <form onSubmit={handleDeposit}>
                <input
                    type="number"
                    placeholder="Deposit Amount"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                />
                <button type="submit">Deposit</button>
            </form>
            <form onSubmit={handleWithdraw}>
                <input
                    type="number"
                    placeholder="Withdrawal Amount"
                    value={withdrawalAmount}
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                />
                <button type="submit">Withdraw</button>
            </form>
            {/* Each these buttons are clicked, the state will change depending on the button.*/}
            <button onClick={handleAddInterest}>Add Interest</button>
            <button onClick={handleApplyCharges}>Apply Charges</button>
        </div>
    );
};

export default account;
