--  All our data schema can be displayed here. For instance, we can split all tables, and each of us can create a table.


-- Add create modules table 
CREATE TABLE modules (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	description VARCHAR,
  created_at timestamp DEFAULT now() 
)

--

