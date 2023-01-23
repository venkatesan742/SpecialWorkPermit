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
    PageNO1: {
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
    PageNo1: {
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
    PageNo2: {
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
    PageNo3: {
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
    PageNo4: {
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
            PageNO1: JamaicanInformation!
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
            PageNo1: TEducation!
            PageNo2: WorkStatus!
            PageNo3: BusinessDetails!
            PageNo4: JamaicanPurpose!
            FullName: TFullName!
            Address: TAddress!
            Gender: EGenderType!
            DateOfBirth: String!
            Country: String!
            PlaceOfBirth: String!
            Nationality: String!
            IdentificationID: String!
            MaterialStatus: EMaterialStatus!
            EntryDate: String!
            QualifyingID: String!
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

        input caricom:{
            pageNo1: CaricomPage1;
            pageNo2: CaricomPage2;
            pageNo3: CaricomPage3; 
            pageNo4: CaricomPage4;
            pageNo5: CaricomPage5;
            pageNo6: CaricomPage6;
        }

        input caricomVerify:{
            pageNo1: CaricomVerifyPage1;
        }
    
        input caricomWorkPermit:{
            pageNo1: caricomWRKPermitPage1;
            pageNo2: caricomWRKPermitPage2;
        }

        input specialWorkPermit:{
            pageNo1: specialWRKPermitPage1;
        }
    
        input MarriageExemption: {
            pageNo1: MarriageEXPTPage1;
            pageNo2: MarriageEXPTPage2;
            pageNo3: MarriageEXPTPage3;
        }
    
        input CaricomPage1: {
            surname: String;
            firstName: String;
            middleName: String;
            addressLine1: String;
            addressLine2: String;
            street: String;
            city: String;
            parish: String;
            dateOfApplication: Date;
            telephoneNumber: String;
            email: String;
            sex: Gender;
            dateOfBirth: date;
            birthCertificateCopyURL: String;
            Nationality: String;
            nationalityCertificateCopyURL: String;
            countryOfBirth: String;
            materialStatus: String;
        }
    
        input CaricomPage2: {
            havingDependents: Boolean;
            numberOfDependents: String;
            dependentsDetails: [dependents]
        }
    
        input dependents: {
            name: String;
            age: String;
            sex: Gender;
            nationality: String;
            nationalityCertificateCopyURL: String;
            passportNumber: String;
            passportExpiryDate: Date;
            passportCopyURL: String;
            relationShip: String;
            photograph: String;
        }
    
        input CaricomPage3: {
            qualification: String;
            nameOfEducation: String;
            dateAwarded: Date;
            institutionName: String;
            institutionAddressLine1: String;
            institutionAddressLine2: String;
            street: String;
            city: String;
            parish: String;
            qualificationCertCopyURL: String;
        }

        input CaricomPage4:{
            employmentStatus: EmploymentStatus;
            selfEmployed: {
                currentOccupation: String;
                businessName: String;
                businessAddressLine1: String;
                businessAddressLine2: String;
                street: String;
                city: String;
                parish: String;
                natureOfBusiness: String;
            }
            employed: {
                occupation: String;
                occupationCertificateCopyURL: String;
                nameOfEmployer: String;
                employerAddressLine1: String;
                employerAddressLine2: String;
                street: String;
                city: String;
                parish: String;
                telephoneNumber: String;
                faxNumber: String;
                emailAddress: String;
                natureOfEmployment: String;
                qualificationCertCopyURL: String;
            }
            student: {
                typeOfQualification: String;
                degreeOrCertification: String;
                institutionName: String;
                institutionAddressLine1: String;
                institutionAddressLine2: String;
                street: String;
                city: String;
                parish: String;
                institutionTelNumber: String;
                institutionFaxNumber: String;
                institutionEmail: String;
            }
        }

        input CaricomPage5:{
            purposeOfRelocation: String;
            selfEmployment: {
                currentOccupation: String;
                businessAddressLine1: String;
                businessAddressLine2: String;
                street: String;
                city: String;
                parish: String;;
                natureOfBusiness: String;
            }
            employment: {
                occupation: String;
                occupationCertificateCopyURL: String;
                natureOfEmployment: String;
            }
        }

        input CaricomPage6:{
            birthCertificateCopyURL: String;
            nationalityCertificateCopyURL: String;
            passportCopyURL: String;
            qualificationCertCopyURL: String;
            applicantSignatureCopURL: String;
        }

        input CaricomVerifyPage1:{
            firstName: String;
            lastName: String;
            addressLine1: String;
            addressLine2: String;
            street: String;
            city: String;
            parish: String;
            dateOfBirth: Date;
            birthCertificateCopyURL: String;
            gender: Gender;
            country: String;
            Nationality: String;
            nationalityCertificateCopyURL: String;
            passportNumber: String;
            passportExpiry: Date;
            passportType: String;
            passportCopyURL: String;
            occupation: String;
            occupationCertificateCopyURL: String;
            perviousCaricomCertCopyURL: String;
        }

        input caricomWRKPermitPage1:{
            firstName: String;
            lastName: String;
            middleInitial: String;
            alias: String;
            addressLine1: String;
            addressLine2: String;
            street: String;
            city: String;
            parish: String;
            gender: Gender;
            dateOfBirth: Date;
            birthCertificateCopyURL: String;
            country: String;
            placeOfBirth: String;
            nationality: String;
            nationalityCertificateCopyURL: String;
            numberOfDependents: String;
            materialStatus: String;
            TRN: String;
            occupation: String;
            occupationCertificateCopyURL: String;
            workPermitPeriod: {
                from: Date;
                to: Date;
            }
            passportNumber: String;
            passportExpiry: Date;
            passportType: String;
            passportCopyURL: String;
            qualification: String;
            qualificationCertCopyURL: String;
            workExperience: String;
            workExperienceCopyURL: String;
            skillsOfApplicant: String;
            husbandOrWifeName: String;
            husbandOrWifeNationality: String;
            photograph: String;
            policeCertCopyURL: String;
            resumeCopy: String;
            coveringLetterCopyURL: String;
        }
        input caricomWRKPermitPage2:{
            previousEmployerDetails: {
                nameOfEmployer: String;
                employerAddressLine1: String;
                employerAddressLine2: String;
                street: String;
                city: String;
                parish: String;
                telephoneNumber: String;
                applicantWRKPermitNumber: String;
                workPermitExpiryDate: date;
                prevEmployerRefLetterCopyURL: String;
            }
            previousWifeOrHusEmployment: {
                nameOfEmployer: String;
                employerAddressLine1: String;
                employerAddressLine2: String;
                street: String;
                city: String;
                parish: String;
                workPermitNumber: String;
                workPermitExpiryDate: date;
                signatureCopyURL: String;
                prevEmployerRefLetterCopyURL: String;
            }
        }
        input rightsOfEstablishment:{
            nameOfEmployer: String;
            addressLine1: String;
            addressLine2: String;
            street: String;
            city: String;
            parish: String;
            dateOfBirth: Date;
            birthCertificateCopyURL: String;
            gender: Gender;
            country: String;
            nationality: String;
            nationalityCertificateCopyURL: String;
            passportNumber: String;
            passportExpiry: Date;
            passportType: String;
            passportCopyURL: String;
            occupation: String;
            occupationCertificateCopyURL: String;
            businessRegistrationCertCopyURL: String;
            taxComplianceCertCopyURL: String;
            competencyInServiceCopyURL: String;
            financialResourceCopyURL: String;
            leaseAgreementCopyURL: String;
            policeReportResidentCopyURL: String;
            passportBearingsCopyURL: String;
            photograph: String;
            marriageCertificateCopyURL: String;
        }

        input specialWRKPermitPage1: {
            firstName: String;
            lastName: String;
            address: Address;
            gender: Gender;
            dateOfBirth: Date;
            birthCertificateCopyURL: String;
            country: String;;
            nationality: String;
            nationalityCertificateCopyURL: String;
            passportNumber: String;
            passportExpiry: Date;
            passportType: String;
            passportCopyURL: String
            occupation: String;
            occupationCertificateCopyURL: String;
            identificationType: String;
            identificationCopyURL: String;
            coveringLetterCopyURL: String;
            photograph: String;
        }
    
        input MarriageEXPTPage1: {
            firstName: String;
            lastName: String;
            middleInitial: String;
            maidenName: String;
            countryOfBirth: String;
            nationality: String;
            nationalityCertificateCopyURL: String;
            passportNumber: String;
            passportIssueDate: Date;
            passportExpiryDate: Date;
            passportCopyURL: String;
            dateOfBirth: Date;
            birthCertificateCopyURL: String;
            photograph: String;
            gender: Gender;
            TRN: String;
            occupation: String;
            occupationCertificateCopyURL: String;
            previouslyMarried: Boolean;
            employmentStatus: EmploymentStatus;
            wereYou: MaritalStatus;
        }
    
        input MarriageEXPTPage2: {
            firstName: String;
            lastName: String;
            middleInitial: String;
            maidenName: String;
            countryOfBirth: String;
            identificationType: String;
            identificationID: String;
            identificationCopyURL: String;
            dateOfBirth: Date;
            birthCertificateCopyURL: String;
            gender: Gender;
            previouslyMarried: Boolean;
            wereYou: MaritalStatus;
            occupation: String;
            occupationCertificateCopyURL: String;
            TRN: String;
            jamaicaBirthCertificateCopyURL: String;
            employmentStatus: EmploymentStatus;
            nameOfEmployer: String;
            employerAddressLine1: String;
            employerAddressLine2: String;
            street: String;
            city: String;
            parish: String;
            telephone: String;
            email: String;        
        }
    
        input MarriageEXPTPage3: {
            marriageCertificate: String;
            nameOfMarriageOfficer: String;
            groomName: String;
            brideName: String;
            placeOfMarriage: String;
            dateOfMarriage: Date;
            coupleAddressLine1: String;
            coupleAddressLine2: String;
            street: String;
            city: String;
            parish: String;
            husbandPhoto: String;
            husbandSignature: String;
            wifePhoto: String;
            wifeSignature: String;
            certifiedBy: String;
        }

        input Employer: {
            pageNo1: EmployerPage1;
            pageNo2: EmployerPage2;
        }

        input EmployerPage1: {
            firstName: String;
            lastName: String;
            middleInitial: String;
            alias: String;
            address: Address;
            gender: Gender;
            dateOfBirth: Date;
            birthCertificateCopyURL: String;
            country: String;
            placeOfBirth: String;
            nationality: String;
            nationalityCertificateCopyURL: String;
            numberOfDependents: String;
            materialStatus: MaritalStatus;
            TRN: String;
            occupation: String;
            occupationCertificateCopyURL: String;
            workPermitPeriod: {
                from: Date;
                to: Date;
            }
            passportNumber: String;
            passportExpiry: Date;
            passportType: String;
            passportCopyURL: String;
            qualification: String;
            qualificationCertCopyURL: String;
            workExperience: String;
            workExperienceCopyURL: String;
            skillsOfApplicant: String;
            husbandOrWifeName: String;
            husbandOrWifeNationality: String;
            photograph: String;
            policeCertCopyURL: String;
            resumeCopy: String;
            coveringLetterCopyURL: String;
            previousEmployerDetails: {
                nameOfEmployer: String;
                addressOfEmployer: Address;
                telephoneNumber: String;
                applicantWRKPermitNumber: String;
                workPermitExpiryDate: date;
                prevEmployerRefLetterCopyURL: String;
            }
            previousWifeOrHusEmployment: {
                nameOfEmployer: String;
                addressOfEmployer: Address;
                workPermitNumber: String;
                workPermitExpiryDate: date;
                signatureCopyURL: String;
                prevEmployerRefLetterCopyURL: String;
            }
        }
    
        enum Gender {
            MALE
            FEMALE
        }

        enum EmploymentStatus: {
            SELFEMPLOYED
            EMPLOYED
            UNEMPLOYED
            STUDENT
        }
    
        enum MaritalStatus: {
            DIVORCED
            WIDOWED
            SINGLE
            MARRIED
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