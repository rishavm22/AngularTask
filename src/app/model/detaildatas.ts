export interface DetailDataResponseData {
    _metaData: MetaData
    records: Records[];
  }

export interface ClientDataResponseData {
    _metaData: MetaData
    records: ClientRecords[];
  }
  
  export interface MetaData {
    page: number,
    per_page: number,
    page_count: number,
    total_count: number,
  }
  
  export interface ClientRecords {
    address: Address[],
    communicationEmails: [],
    documentsActivated: [],
    assignedMembers: AssignedMember[],
    _id: string,
    name: string,
    email: string,
    phone_no: string,
    role: Role[],
    profilePercentage: number,
    clientID: string,
    stateGst: [],
    stakeholderDetails: [],
    createdAt: string,
    updatedAt: string,
    deleted: boolean,
    deletedAt: null,
  }

  export interface Records {
    sendEmail: boolean,
    primary: boolean,
    clientUpload: boolean,
    assignedMembers: [],
    _id: string,
    category: string,
    docType: string,
    type: string,
    financialYear: string,
    client: {
      _id: string,
      name: string,
      companyName: string,
      email: string,
      clientID: string,
      createdAt: string,
      updatedAt: string,
    },
    month: number,
    status: string,
    folder: Folder[],
    createdAt: string,
    updatedAt: string,
    deleted: boolean,
    deletedAt: null,
    uploadedAt: null,
    uploadedBy: string,
  }
  
  export  interface Folder{
    _id: string,
    file: string,
    preview: string,
  }

  export interface Address {
    
  }

  export interface Role {
    modules: string[],
    _id: string
  }

  export interface Modules {
    modules: Modules[]
  }

  export interface AssignedMember {
    clientID: string,
    createdAt: string,
    email: string,
    name: string,
    updatedAt: string
    _id: string
  }