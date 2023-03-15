interface Company {
    _id?: string;
    name?: string;
    email: string;
    password: string;
    totalReviews? : number;
    last6HoursReviews? :number;
    happyClients? : number;
    unSatisfiedClients? : number;
}

export { Company  }