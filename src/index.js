import { GraphQLServer } from 'graphql-yoga';

const applicants = [{
    FullName: {
        FirstName: "venkatesan",
        LastName: "kumar",
        MiddleName: "unknown",
        Alias: "",
    },
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

const marriageApp = [{
    FullName: {
        FirstName: "venkatesan",
        LastName: "kumar",
        MiddleName: "unknown",
        Alias: "",
    },
    Gender: "MALE",
    DateOfBirth: "05/04/2000",
    Country: "india",
    PlaceOfBirth: "vellore",
    Nationality: "indian",
    MaterialStatus: "SINGLE",
    EmploymentStatus: "UNEMPLOYED",
    Occupation: "formar",
    PermitPeriodFrom: "12/21/2022",
    PermitPeriodTo: "02/21/2023",
    PassportNumber: 1368,
    PassportExpiryDate: "12/21/2026",
    JamaicanDetails: {
    FullName: {
        FirstName: "venkatesan",
        LastName: "kumar",
        MiddleName: "unknown",
        Alias: "",
    },
    Gender: "MALE",
    DateOfBirth: "05/04/2000",
    Country: "india",
    PlaceOfBirth: "vellore",
    Nationality: "indian",
    IdentificationID: "ISDF8587447",
    MaterialStatus: "SINGLE",
    EmploymentStatus: "UNEMPLOYED",
    AddressEmployee: {
        AddressLine1: "25/b",
        AddressLine2: "anna nagar",
        Street: "balaji street",
        City: "vellore",
        Parish: "" ,
    },
    TRN: "ADFD588",
    Occupation: "former",
    JamaicanBirthCertificateID: "FGHJ857",
    MarriageOfficerName: "SARAVANAN",
    GroomName: "unknown",
    BrideName: "unknown",
    MarriagePlace: "adfasf",
    CoupleAddress: {
        AddressLine1: "25/b",
        AddressLine2: "anna nagar",
        Street: "balaji street",
        City: "vellore",
        Parish: "" ,
    },
    }
    
}]

const CSMEApp = [{
    FullName: {
        FirstName: "venkatesan",
        LastName: "kumar",
        MiddleName: "unknown",
        Alias: "",
    },
    Address: {
        AddressLine1: "25/b",
        AddressLine2: "anna nagar",
        Street: "balaji street",
        City: "vellore",
        Parish: "" ,
    },
    Gender: "MALE",
    DateOfBirth: "05/04/2000",
    Qualification: {
        HigherQualification: "B.SC",
        NameOfInstitution: "Anna University",
        DateCompleted: "05/04/2000",
        InstitutionAddress: {
            AddressLine1: "25/b",
            AddressLine2: "anna nagar",
            Street: "balaji street",
            City: "vellore",
            Parish: "" ,
        },
    },
    Country: "india",
    PlaceOfBirth: "vellore",
    Nationality: "indian",
    IdentificationID: "KJFS7418",
    MaterialStatus: "SINGLE",
    EntryDate: "12/21/2022",
    QualifyingID: "KJFS7418",
    PermitPeriodTo: "02/21/2023",
    PassportNumber: 1368,
    PassportExpiryDate: "12/21/2026",
    QualifyPRTDetails: {
    FullName: {
        FirstName: "venkatesan",
        LastName: "kumar",
        MiddleName: "unknown",
        Alias: "",
    },
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
    Qualification: "B.Sc",
    },
    Business: {
        EmploymentPosting: "Engineer",
        NatureOfBusiness: "Employed",
        Address: {
            AddressLine1: "25/b",
            AddressLine2: "anna nagar",
            Street: "balaji street",
            City: "vellore",
            Parish: "" ,
        },  
    },
    Purpose: {
        PurposeToJMC: "Employment",
    },
}]

const typeDefs = `
        type Query {
            applications: [SpecialWorkPermit!]!
            marriageApp: [MarriageExemption!]!
            verificationApp: [CSMEVerification!]!        
        }

        type Mutation {
            createApplicant(data: CreateSpecialWorkPermit): SpecialWorkPermit!
            createMarriageApp(data: CreateMarriageExemption): MarriageExemption!
        }

        type SpecialWorkPermit {
           FullName: TFullName!
           Address: TAddress!
           Gender: EGenderType!
           DateOfBirth: String!
           Country: String!
           PlaceOfBirth: String!
           Nationality: String!
           NumberOfChildren: Int!
           MaterialStatus: EMaterialStatus!
           Occupation: String!
           PermitPeriodFrom: String!
           PermitPeriodTo: String!
           PassportNumber: Int!
           PassportExpiryDate: String!
           Qualification: String!
        }

        type MarriageExemption {
            FullName: TFullName!
            Gender: EGenderType!
            DateOfBirth: String!
            Country: String!
            PlaceOfBirth: String!
            Nationality: String!
            MaterialStatus: EMaterialStatus!
            EmploymentStatus: EEmploymentStatus!
            Occupation: String!
            PermitPeriodFrom: String!
            PermitPeriodTo: String!
            PassportNumber: Int!
            PassportExpiryDate: String!
            JamaicanDetails: JamaicanInformation!
        }

        type JamaicanInformation {
            FullName: TFullName!
            Gender: EGenderType!
            DateOfBirth: String!
            Country: String!
            PlaceOfBirth: String!
            Nationality: String!
            IdentificationID: String!
            MaterialStatus: EMaterialStatus!
            EmploymentStatus: EEmploymentStatus!
            EmployeeAddress: TAddress
            TRN: String!
            Occupation: String!
            JamaicanBirthCertificateID: String!
            MarriageOfficerName: String!
            GroomName: String!
            BrideName: String!
            MarriagePlace: String!
            CoupleAddress: TAddress!
        }

        type CSMEVerification {
            FullName: TFullName!
            Address: TAddress!
            Gender: EGenderType!
            DateOfBirth: String!
            Qualification: TEducation!
            Country: String!
            PlaceOfBirth: String!
            Nationality: String!
            IdentificationID: String!
            MaterialStatus: EMaterialStatus!
            EntryDate: String!
            QualifyingID: String!
            QualifyPRTDetails: WorkStatus!
            Business: BusinessDetails!
            Purpose: JamaicanPurpose!
        }

        type TEducation {
            HigherQualification: String!
            NameOfInstitution: String!
            DateCompleted: String!
            InstitutionAddress: TAddress!
        }

        type WorkStatus {
            FullName: TFullName!
            Address: TAddress!
            Gender: EGenderType!
            DateOfBirth: String!
            Country: String!
            PlaceOfBirth: String!
            Nationality: String!
            Qualification: String!
            
        }

        type TFullName {
            FirstName: String!
            LastName: String!
            MiddleName: String
            Alias: String
        }

        type TAddress {
            AddressLine1: String!
            AddressLine2: String!
            Street: String!
            City: String!
            Parish: String
        }

        type BusinessDetails {
            EmploymentPosting: String
            NatureOfEmployment: String 
            NameOfBusiness: String
            NatureOfBusiness: String
            Address: TAddress!         
        }

        type JamaicanPurpose {
            PurposeToJMC: String!
            Occupation: String
            NatureOfOccupation: String 
        }

        input CreateSpecialWorkPermit {
                FullName: IFullName!
                Address: IAddress!
                Gender: EGenderType!
                DateOfBirth: String!
                Country: String!
                PlaceOfBirth: String!
                Nationality: String!
                NumberOfChildren: Int!
                MaterialStatus: EMaterialStatus!
                Occupation: String!
                PermitPeriodFrom: String!
                PermitPeriodTo: String!
                PassportNumber: Int!
                PassportExpiryDate: String!
                Qualification: String!
        } 

        input CreateMarriageExemption {
            FullName: IFullName!
            Gender: EGenderType!
            DateOfBirth: String!
            Country: String!
            PlaceOfBirth: String!
            Nationality: String!
            MaterialStatus: EMaterialStatus!
            EmploymentStatus: EEmploymentStatus!
            Occupation: String!
            PermitPeriodFrom: String!
            PermitPeriodTo: String!
            PassportNumber: Int!
            PassportExpiryDate: String!
        }

        input CreateJamaicanInformation {
            FullName: IFullName!
            Gender: EGenderType!
            DateOfBirth: String!
            Country: String!
            PlaceOfBirth: String!
            Nationality: String!
            IdentificationID: String!
            NumberOfChildren: Int!
            MaterialStatus: EMaterialStatus!
            EmploymentStatus: EEmploymentStatus!
            EmployeeAddress: IAddress
            TRN: String!
            Occupation: String!
            JamaicanBirthCertificateID: String!
            MarriageOfficerName: String!
            GroomName: String!
            BrideName: String!
            MarriagePlace: String!
            CoupleAddress: IAddress!
        }

        input IAddress {
            AddressLine1: String!
            AddressLine2: String!
            Street: String!
            City: String!
            Parish: String
        }

        input IFullName {
            FirstName: String!
            LastName: String!
            MiddleName: String
            Alias: String
        }

        enum EGenderType {
            MALE
            FEMALE
        }

        enum EMaterialStatus{
            SINGLE
            MARRIED
            DIVORCED
            WIDOWED
        }

        enum EEmploymentStatus{
            SELFEMPLOYMENT
            EMPLOYED
            UNEMPLOYED
            STUDENT
        }
`
// resolvers
const resolvers = {
    Query: {
        applications(){
            return applicants
        },
        marriageApp(){
            return marriageApp
        },
        verificationApp(){
            return CSMEApp
        }
    },
    Mutation: {
        createApplicant(parent, args, ctx, info){
            const applicantsExist = applicants.some((applicant) => applicant.FullName.FirstName === args.data.FullName.FirstName)

            if (applicantsExist) {
                throw new Error('Applicant is already exist')
            }

            const applicant = {
                ...args.data
            }
            applicants.push(applicant)
            return applicant
        },
        createMarriageApp(parent, args, ctx, info){
            const applicantsExist = marriageApp.some((applicant) => applicant.FullName.FirstName === args.data.FullName.FirstName)

            if (applicantsExist) {
                throw new Error('Applicant is already exist')
            }

            const applicant = {
                ...args.data
            }
            marriageApp.push(applicant)
            return marriageApp
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