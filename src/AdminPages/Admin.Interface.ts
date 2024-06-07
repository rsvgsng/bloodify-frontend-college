export interface RecentBloodRequest {
    reqID: number
    patientName: string
    bloodGroup: string
    District: string
    Hospital: string
    contactNumber: string
    reqestedUser: number
    details: string
    requestedDate: string
    userName: string
}

export interface RecentUser {
    userID: number
    userName: string
    fullName: string
    phone: string
    district: string
    fullAddress: string
    bloodType: string
    role: string
    joinedOn: string
}


export interface RecentBloodRequestscount {
    campaigns_count: number
    ambulances_count: number
    bloodRequests_count: number
    bloodBank_count: number
    users_count: number
}

export interface IDash {
    recentBloodRequestscount: RecentBloodRequestscount
    recentBloodRequests: RecentBloodRequest[]
    recentUsers: RecentUser[]
}

export interface IDashMain {
    data: IDash
    statusCode: number
    message: string
}



export interface IUsersMain {
    data: usersMain[]
    statusCode: number
    message: string
}

export interface usersMain {
    userID: number
    userName: string
    fullName: string
    phone: string
    district: string
    fullAddress: string
    bloodType: string
    role: string
    joinedOn: string
}





export interface IBloodRequestMain {
    data: BloodRequestSub[]
    statusCode: number
}

export interface BloodRequestSub {
    reqID: number
    patientName: string
    bloodGroup: string
    District: string
    Hospital: string
    contactNumber: string
    reqestedUser: number
    details: string
    requestedDate: string
    userName: string
    isExpired: boolean
}




export interface IBloodBankMain {
    data: BloodBankSub[]
    statusCode: number
}

export interface BloodBankSub {
    bankID: number
    bankName: string
    bankLoaction: string
    bankContact: string
    bankDistrict: string
}
