import os
import psycopg2

DATABASE_URL = os.getenv('DATABASE_URL')

conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor()

# Perform database operations
cur.execute('SELECT version()')
db_version = cur.fetchone()
print(f'Database version: {db_version}')

cur.close()
conn.close()
