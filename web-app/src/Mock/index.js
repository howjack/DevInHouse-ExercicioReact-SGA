import { createServer, Model } from 'miragejs'
console.log("MOCK");

createServer({
    models: {
        student: Model,
        employee: Model
    },

    seeds(server) {
        server.create("student", {
            id: 0,
            showTextArea: true,
            notes: "",
            name: "Phelipe Alves Fagundes",
            birthDate: "1998-06-26T03:00:00.000Z",
            respName: "Valmor Fagundes",
            respPhone: "5547999999999",
            respWarningDegree: "Pai",
            respWarningPhone: "5547999999999",
            foodDescription: "Bolo, Chocolate",
            photoAuthorization: true,
            authorizedPersons: [
                {
                    name: "João",
                    grau: "Tios"
                },
                {
                    name: "Marilda",
                    grau: "Tios"
                }
            ],
            class: "202",
            remarks: "Gordão"
        })
        server.create("student", {
            id: 1,
            showTextArea: true,
            notes: "Mau Aluno",
            name: "Matheus Khorb",
            birthDate: "1999-03-20T03:00:00.000Z",
            respName: "Mulato Khorb",
            respPhone: "5547888888888",
            respWarningDegree: "Pai",
            respWarningPhone: "5547888888888",
            foodDescription: "Culher",
            photoAuthorization: false,
            authorizedPersons: [
                {
                    name: "Alberto",
                    grau: "Tios"
                },
                {
                    name: "João",
                    grau: "Tios"
                }
            ],
            class: "201",
            remarks: "14,5"
        })
        server.create("student", {
            id: 2,
            showTextArea: false,
            notes: "",
            name: "Cleverton Ruppenthal",
            birthDate: "1999-04-16T03:00:00.000Z",
            respName: "Rozeli Ruppenthal",
            respPhone: "5547777777777",
            respWarningDegree: "Mãe",
            respWarningPhone: "5547777777777",
            foodDescription: "", //
            photoAuthorization: true, //
            authorizedPersons: [
                {
                    name: "Silverio",
                    grau: "Tios"
                },
                {
                    name: "Junior",
                    grau: "Padrinhos"
                }
            ],
            class: "301",
            remarks: "Nerd"
        })
        server.create("employee", {
            id: 1,
            name: "Phelipe Alves Fagundes",
            email: "phelipe44@gmail.com",
            role: "Professor",
            classes: [104, 202],
            password: "12345"
        })
        server.create("employee", {
            id: 2,
            name: "Luna Almeida",
            email: "luna@gmail.com",
            role: "Coordenador",
            classes: [204],
            password: "12345"
        })
        server.create("employee", {
            id: 3,
            name: "Eliseu Oliveira Peres Edson Reis",
            email: "eliseu_gatinho123@gmail.com",
            role: "Diretor",
            classes: [101],
            password: "12345"
        })
    },

    routes() {
        this.namespace = "api"

        this.get("/students", (schema, request) => {
            return schema.students.all()
        })

        this.get("/students/:id", (schema, request) => {
            let id = request.params.id

            return schema.students.find(id)
        })

        this.post("/students", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            let min = Math.ceil(3);
            let max = Math.floor(1000);
            attrs.id = Math.floor(Math.random() * (max - min + 1)) + min;
            return schema.students.create(attrs)
        })

        this.patch("/students/:id", (schema, request) => {
            let newAttrs = JSON.parse(request.requestBody)
            let id = request.params.id
            let student = schema.students.find(id)

            return student.update(newAttrs)
        })

        this.delete("/students/:id", (schema, request) => {
            let id = request.params.id

            return schema.students.find(id).destroy()
        })


        this.get("/employees/:email", (schema, request) => {
            let email = request.params.email
            let get = schema.employees.findBy({ email: email})
            return get.attrs
        })
        this.patch("/employees/:id", (schema, request) => {
            let newAttrs = JSON.parse(request.requestBody)
            let id = request.params.id
            let employee = schema.employees.find(id)

            return employee.update(newAttrs)
        })
        

        this.get("/kindred", () => {
            return {
                kindred: [
                    "Pai",
                    "Mãe",
                    "Irmão(a)",
                    "Tio",
                    "Avo"
                ]
            }
        });
        this.get("/degrees", () => {
            return {
                degrees: [
                    101,
                    102,
                    103,
                    201,
                    202,
                    203,
                    301,
                    302,
                    303,
                ]
            }
        })
    }

})