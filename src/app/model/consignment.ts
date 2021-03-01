export class Consignment {
    url: string;
    container: string;
    shipper: string;
    line: string;
    departure: string;
    arrival: string;
    vessel: string;
    status:string;
    receipt_number: string;
    created_at: string;
    updated_at: string;
    modified_by: string;

    constructor(url: string,  container_number: string,
    shipper: JSON, line: JSON, departure: string, arrival: string,
    vessel: JSON, status:string, receipt_number: string,
    created_at:string, updated_at: string, modified_by: string) {
        this.url = url;
        this.container = container_number;
        this.shipper = shipper['first_name'];
        this.line = line['name'];
        this.departure = departure;
        this.arrival = arrival;
        this.vessel = vessel['name'];
        this.status = status;
        this. receipt_number = receipt_number;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.modified_by = modified_by;
    }
}
