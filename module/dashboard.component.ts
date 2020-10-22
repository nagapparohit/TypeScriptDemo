import {multiply,log as mathLog} from "./math.util";
import { generateSalary,generatePaySlip,log} from "./employee.service";


export default class Dashboard{
    employeeID;
    
    createDashboard(){
        multiply(2,3);
        mathLog();
        generateSalary();
        generatePaySlip();
        log();
    }
}

export function logDashboardActivities(){
    console.log("Logged dashboard actitvites!!");
}