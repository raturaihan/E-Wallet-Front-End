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
    sender: string, 
    
}