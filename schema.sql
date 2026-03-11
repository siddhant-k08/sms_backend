CREATE TABLE subscriptions (
    subscription_id SERIAL PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL,
    plan_name VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL CHECK (end_date >= start_date),
    monthly_cost DECIMAL(10,2) NOT NULL CHECK (monthly_cost >= 0),
    status VARCHAR(50) NOT NULL CHECK (status IN ('Active','Expired','Cancelled')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);