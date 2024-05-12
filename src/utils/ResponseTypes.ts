export interface RequestBloodType {
    patientName: string
    bloodGroup: string
    District: string
    Hospital: string
    contactNumber: string
    reqID: string
    details: string
    requestedDate: string
}


export interface SearchResponseType {
    data: Sr[]
    statusCode: number
    message: string
}

export interface Sr {
    fullName: string
    phone: string
    bloodType: string
    district: string
    fullAddress: string
}


export interface SearchAmbulanceType {
    data: sat[]
    statusCode: number
    message: string
}

export interface sat {
    ambulanceId: number
    ambulanceProvider: string
    ambulanceLocation: string
    ambulanceContact: string
    ambulanceDistrict: string
}


export interface SearchBloodBankType {
    data: sbbt[]
    statusCode: number
    message: string
}

export interface sbbt {
    bankID: number
    bankName: string
    bankLoaction: string
    bankContact: string
    bankDistrict: string
}
