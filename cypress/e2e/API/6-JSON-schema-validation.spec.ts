// Install ajv library first
// npm install ajv

const Ajv = require('ajv')  //this step is kind of importing
const ajv = new Ajv() // creating object by new keyword, initialized with ajv variable name

describe('API testing with JSON schema validation', () => {
  it('validates the response against the schema', () => {
    cy.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
      })
      .then(response => {
      const schema =   {
                                "$schema": "http://json-schema.org/draft-07/schema#",
                                "title": "Generated schema for Root",
                                "type": "array",
                                "items": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                    "type": "number"
                                    },
                                    "title": {
                                    "type": "string"
                                    },
                                    "price": {
                                    "type": "number"
                                    },
                                    "description": {
                                    "type": "string"
                                    },
                                    "category": {
                                    "type": "string"
                                    },
                                    "image": {
                                    "type": "string"
                                    },
                                    "rating": {
                                    "type": "object",
                                    "properties": {
                                        "rate": {
                                        "type": "number"
                                        },
                                        "count": {
                                        "type": "number"
                                        }
                                    },
                                    "required": [
                                        "rate",
                                        "count"
                                    ]
                                    }
                                },
                                "required": [
                                    "id",
                                    "title",
                                    "price",
                                    "description",
                                    "category",
                                    "image",
                                    "rating"
                                ]
                                }
                } // schema end
      
      const validate = ajv.compile(schema)
      const isValid = validate(response.body)
      expect(isValid).to.be.true;
    })
  })
})
