const faker = require("faker");
const express = require("express");

const app = express();
const port = 8000;

const newUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumer: faker.phone.phoneNumer(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

const newCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.stateAbbr(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    },
});

app.get("/api/users/new", (req, res) => {
    const user = newUser();
    res.json(user);
});

app.get("/api/companies/new", (req, res) => {
    const company = newCompany();
    res.json(company);
});

app.get("/api/user/company", (req, res) => {
    const user = newUser();
    const company = newCompany();
    const responseObj = {
        user: user,
        company: company,
    };
    res.json(responseObj);
});



app.listen(port, () => console.log('express running on port ${port}'));