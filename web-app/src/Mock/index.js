import { createServer } from 'miragejs'
console.log("MOCK");

let students = [
    {
        showTextArea: true,
        name: "Phelipe Alves Fagundes",
        birthDate: "1998-06-26T03:00:00.000Z",
        respName: "Valmor Fagundes",
        respPhone: "5547991407271",
        respWarningDegree: "Pai",
        respWarningPhone: "5547991407271",
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
        remarks: "Camarão"
    },
    {
        showTextArea: true,
        name: "Matheus Khorb",
        birthDate: "1999-03-20T03:00:00.000Z",
        respName: "Mulato Khorb",
        respPhone: "5547991407271",
        respWarningDegree: "Pai",
        respWarningPhone: "5547991407271",
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
        remarks: "Pepino"
    },
    {
        showTextArea: false,
        name: "Cleverton Ruppenthal",
        birthDate: "1999-04-16T03:00:00.000Z",
        respName: "Rozeli Ruppenthal",
        respPhone: "5547991407271",
        respWarningDegree: "Mãe",
        respWarningPhone: "5547991407271",
        foodDescription: "",
        photoAuthorization: true,
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
    }
]

createServer({
    routes() {
        this.namespace = "api"

        this.post("/students", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            students.push(attrs)
            console.log(students)
            return {student: attrs}
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
        this.get("/students", () => {
            return {
                students
            }
        });

    },

})