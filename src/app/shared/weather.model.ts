export class Weather {
    constructor(public temp: number, public name: string) {
        // convert temperature to fahrenheit
        // temp = (9/5*(temp-273.15)+32);
    };
}