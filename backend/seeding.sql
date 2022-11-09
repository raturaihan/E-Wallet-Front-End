INSERT INTO source_of_funds(name, created_at, updated_at)
VALUES
('Bank Transfer', '2022-09-08 15:00:00', '2022-09-08 15:00:00'),
('Credit Card', '2022-09-08 15:00:00', '2022-09-08 15:00:00'),
('Cash', '2022-09-08 15:00:00', '2022-09-08 15:00:00');

INSERT INTO users (
    created_at, 
    updated_at, 
    deleted_at, 
    name, 
    email, 
    password 
) VALUES (
    '2020-09-08', 
    '2020-09-08', 
    NULL, 
    'user1', 
    'user1@email.com', 
    '$2a$10$xSpDadwNTwvkcaxceW1FheMD8a.G/vLzYjqkCFWVyTC8uoiurTyy2'
);

INSERT INTO users (
    created_at, 
    updated_at, 
    deleted_at, 
    name, 
    email, 
    password
) VALUES (
    '2020-10-10', 
    '2020-10-10', 
    NULL, 
    'user2', 
    'user2@email.com', 
    '$2a$10$xSpDadwNTwvkcaxceW1FheMD8a.G/vLzYjqkCFWVyTC8uoiurTyy2'
);

INSERT INTO users (
    created_at, 
    updated_at, 
    deleted_at, 
    name, 
    email, 
    password
) VALUES (
    '2020-01-01', 
    '2020-01-01', 
    NULL, 
    'user3', 
    'user3@email.com', 
    '$2a$10$xSpDadwNTwvkcaxceW1FheMD8a.G/vLzYjqkCFWVyTC8uoiurTyy2'
);

INSERT INTO users (
    created_at, 
    updated_at, 
    deleted_at, 
    name, 
    email, 
    password
) VALUES (
    '2020-02-02', 
    '2020-02-02', 
    NULL, 
    'user4', 
    'user4@email.com', 
    '$2a$10$xSpDadwNTwvkcaxceW1FheMD8a.G/vLzYjqkCFWVyTC8uoiurTyy2'
);

INSERT INTO users (
    created_at, 
    updated_at, 
    deleted_at, 
    name, 
    email, 
    password
) VALUES (
    '2020-09-08', 
    '2020-09-08', 
    NULL, 
    'user5', 
    'user5@email.com', 
    '$2a$10$xSpDadwNTwvkcaxceW1FheMD8a.G/vLzYjqkCFWVyTC8uoiurTyy2'
);

INSERT INTO wallets (
    created_at, 
    updated_at, 
    deleted_at, 
    wallet_number, 
    balance,
    user_id
)
VALUES (
    '2020-09-08', 
    '2020-09-08', 
    NULL, 
    '100001', 
    40000,
    1
);

INSERT INTO wallets (
    created_at, 
    updated_at, 
    deleted_at, 
    wallet_number, 
    balance,
    user_id
)
VALUES (
    '2020-10-10', 
    '2020-10-10', 
    NULL, 
    '100002', 
    55000,
    2
);

INSERT INTO wallets (
    created_at, 
    updated_at, 
    deleted_at, 
    wallet_number, 
    balance,
    user_id
)
VALUES (
    '2020-01-01', 
    '2020-01-01', 
    NULL, 
    '100003', 
    105000,
    3
);

INSERT INTO wallets (
    created_at, 
    updated_at, 
    deleted_at, 
    wallet_number, 
    balance,
    user_id
)
VALUES (
    '2020-02-02', 
    '2020-02-02',   
    NULL, 
    '100004', 
    50000,
    4
);

INSERT INTO wallets (
    created_at, 
    updated_at, 
    deleted_at, 
    wallet_number, 
    balance,
    user_id
)
VALUES (
    '2020-09-08', 
    '2020-09-08', 
    NULL, 
    '100005', 
    50000,
    5
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-12-12', 
    '2020-12-12',  
    NULL, 
    '2020-12-12', 
    1, 
    1,
    1,
    1, 
    50000, 
    'Top Up from Bank Transfer',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-01-01', 
    '2020-01-01',  
    NULL, 
    '2020-01-01',  
    1, 
    2,
    2,
    2, 
    50000, 
    'Top Up from Bank Transfer',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-01-02', 
    '2020-01-02',  
    NULL,
    '2020-01-02',  
    1, 
    3,
    3,
    3, 
    50000, 
    'Top Up from Bank Transfer',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-01-12', 
    '2020-01-12',  
    NULL,
    '2020-01-12',  
    1, 
    3,
    3,
    3, 
    50000, 
    'Top Up from Bank Transfer',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-01', 
    '2020-02-01',  
    NULL,
    '2020-02-01',  
    1, 
    4,
    4,
    4, 
    50000, 
    'Top Up from Bank Transfer',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-03', 
    '2020-02-03',  
    NULL, 
    '2020-02-03',  
    1, 
    5,
    5,
    5, 
    50000, 
    'Top Up from Bank Transfer',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-13', 
    '2020-02-13',  
    NULL,
    '2020-02-13',  
    NULL, 
    1,
    2,
    2, 
    5000, 
    'Gift for you',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-13', 
    '2020-02-13',  
    NULL,
    '2020-02-13',  
    NULL, 
    1,
    2,
    1, 
    5000, 
    'Gift for you',
    'OUTCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    2,
    3,
    3, 
    5000, 
    'Pay Food',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    2,
    3,
    2, 
    5000, 
    'Pay Food',
    'OUTCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    3,
    4,
    4, 
    5000, 
    'Pay Rent',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    3,
    4,
    3, 
    5000, 
    'Pay Rent',
    'OUTCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    4,
    5,
    5, 
    5000, 
    'Pay Wifi',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    4,
    5,
    4, 
    5000, 
    'Pay Wifi',
    'OUTCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    5,
    1,
    1, 
    5000, 
    'Pay Car',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    5,
    1,
    5, 
    5000, 
    'Pay Car',
    'OUTCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    1,
    2,
    2, 
    5000, 
    'Pay Lawson',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    1,
    2,
    1, 
    5000, 
    'Pay Lawson',
    'OUTCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    1,
    3,
    3, 
    5000, 
    'Pay Shopee Food',
    'INCOME'
);

INSERT INTO transactions (
    created_at, 
    updated_at, 
    deleted_at, 
    date,
    source_of_fund_id,
    sender_id, 
    recipient_wallet_id,
    wallet_id,
    amount, 
    description,
    status
) VALUES (
    '2020-02-20', 
    '2020-02-20',  
    NULL, 
    '2020-02-20',  
    NULL,
    1,
    3,
    1, 
    5000, 
    'Pay Shopee Food',
    'OUTCOME'
);
