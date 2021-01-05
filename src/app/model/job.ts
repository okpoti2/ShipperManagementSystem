export class Job {
    id: number;
    containerNumber: string;
    shipper: string;
    line: string;
    departure: string;
    arrival: string;
    vessel: string;
    status:boolean;
    jobDate: string;
    receiptNumber: string;

    constructor(id: number,  containerNumber: string,
    shipper: string, line: string, departure: string, arrival: string,
    vessel: string, status:boolean, jobDate: string, receiptNumber: string) {
        this.id = id;
        this.containerNumber = containerNumber;
        this.shipper = shipper;
        this.line = line;
        this.departure = departure;
        this.arrival = arrival;
        this.vessel = vessel;
        this.status = status;
        this.jobDate = jobDate;
        this. receiptNumber = receiptNumber;
    }
}
