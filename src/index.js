import { GraphQLServer } from 'graphql-yoga';

const applicants = [{
    FirstName: "venkatesan",
    LastName: "kumar",
    MiddleName: "unknown",
    Alias: "",
    Address: {
        AddressLine1: "25/b",
        AddressLine2: "anna nagar",
        Street: "balaji street",
        City: "vellore",
        Parish: "" ,
    },
    Gender: "MALE",
    DateOfBirth: "05/04/2000",
    Country: "india",
    PlaceOfBirth: "vellore",
    Nationality: "indian",
    NumberOfChildren: 0,
    MaterialStatus: "SINGLE",
    Occupation: "former",
    PermitPeriodFrom: "12/21/2022",
    PermitPeriodTo: "02/21/2023",
    PassportNumber: 1368,
    PassportExpiryDate: "12/21/2026",
    Qualification: "B.Sc"
}]

const typeDefs = `
        type Query {
            applications: [SpecialWorkPermit!]!
        }

        type Mutation {
            createApplicant(data: CreateSpecialWorkPermit): SpecialWorkPermit!
        }

        type SpecialWorkPermit {
           FirstName: String!
           LastName: String!
           MiddleName: String
           Alias: String
           Address: TAddress!
           Gender: GenderType!
           DateOfBirth: String!
           Country: String!
           PlaceOfBirth: String!
           Nationality: String!
           NumberOfChildren: Int!
           MaterialStatus: IMaterialStatus!
           Occupation: String!
           PermitPeriodFrom: String!
           PermitPeriodTo: String!
           PassportNumber: Int!
           PassportExpiryDate: String!
           Qualification: String!
        }

        type TAddress {
            AddressLine1: String!
            AddressLine2: String!
            Street: String!
            City: String!
            Parish: String
        }

        input CreateSpecialWorkPermit {
                FirstName: String!
                LastName: String!
                MiddleName: String
                Alias: String
                Address: IAddress!
                Gender: GenderType!
                DateOfBirth: String!
                Country: String!
                PlaceOfBirth: String!
                Nationality: String!
                NumberOfChildren: Int!
                MaterialStatus: IMaterialStatus!
                Occupation: String!
                PermitPeriodFrom: String!
                PermitPeriodTo: String!
                PassportNumber: Int!
                PassportExpiryDate: String!
                Qualification: String!
         } 

        input IAddress {
            AddressLine1: String!
            AddressLine2: String!
            Street: String!
            City: String!
            Parish: String
        }

        enum GenderType {
            MALE
            FEMALE
        }

        enum IMaterialStatus{
            SINGLE
            MARRIED
            DIVORCED
            WIDOWED
        }
`
// resolvers
const resolvers = {
    Query: {
        applications(){
            return applicants
        }
    },
    Mutation: {
        createApplicant(parent, args, ctx, info){
            const applicantsExist = applicants.some((applicant) => applicant.FirstName === args.data.FirstName)

            if (applicantsExist) {
                throw new Error('Applicant is already exist')
            }

            const applicant = {
                ...args.data
            }
            applicants.push(applicant)
            return applicant
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})


server.start(() => {
    console.log('server is up!');
})