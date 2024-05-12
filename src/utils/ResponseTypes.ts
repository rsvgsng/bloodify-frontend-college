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