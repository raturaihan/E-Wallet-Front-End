export interface IUser {
    name: string,
    email?: string,
    wallet_number: string, 
    balance: number
}

export interface ITransaction {
    id: number,
    amount: number,
    status: string, 
    description: string,
    date: string,
    source_of_fund: string,
    sender: string, 
    recipient: string
}

export interface ITransfer {
    transferTo: string,
    transferAmount: number, 
    transferDescription: string,
}