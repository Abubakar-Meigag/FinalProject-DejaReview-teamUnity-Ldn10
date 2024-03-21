--  All our data schema can be displayed here. For instance, we can split all tables, and each of us can create a table.
--  Add create modules table 
CREATE TABLE modules (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	description VARCHAR,
	created_at timestamp DEFAULT now()
);

-- Add users table
-- CREATE TABLE users (
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(255) NOT NULL,
-- 	last_name VARCHAR(255) NOT NULL,
-- 	email VARCHAR(255) NOT NULL UNIQUE
-- );

-- INSERT INTO
-- 	users (first_name, last_name, email)
-- VALUES
-- 	('Elena', 'Barker', 'elena@gmail.com'),
-- 	('Abubakar', 'Meigag', 'beko@gmail.com'),
-- 	('Kristina', 'Dudnyk', 'kristina@gmail.com'),
-- 	('Joseph', 'Mwanza' 'joseph@gmail.com');

-- topics table 
CREATE TABLE topics (
	id SERIAL PRIMARY KEY,
	module_id INTEGER REFERENCES modules(id),
	topic_name VARCHAR(300),
	description VARCHAR,
	reference_link VARCHAR,
	test_link VARCHAR
);

-- Dashboard table
CREATE TABLE learning_topics_tracker (
	id SERIAL PRIMARY KEY,
	topic_id INT,
	user_id INT,
	task_status INT DEFAULT 0,
	due_date timestamp,
	reviews_remaining INT DEFAULT 4
);

-- NEW users table
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(300) NOT NULL,
	email VARCHAR(300) NOT NULL UNIQUE,
	picture VARCHAR,
	sub VARCHAR(700),
	created_at timestamp DEFAULT now()
);