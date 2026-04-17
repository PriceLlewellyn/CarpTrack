DOCKER:
Host name/address: carp-db
Port: 5432
Maintenance database: carptrack_db
Username: admin
Password: password123
http://localhost:8080

PRISMA:
you can run the generate command to generate the types and Client needed for your project.
If any changes are made to your schema, you will need to rerun the generate command to keep those types in sync
npx prisma generate
