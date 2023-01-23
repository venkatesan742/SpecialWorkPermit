import { GraphQLServer } from 'graphql-yoga';


//TypeDefinitions
const typeDefs = `

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