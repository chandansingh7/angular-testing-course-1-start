import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from '@angular/core/testing'

describe('CalculatorService', ()=>{
    let calculator : CalculatorService,loggerSpy:any;
    
    beforeEach(()=>{
        console.log("Calling BeforeEach");
        loggerSpy = jasmine.createSpyObj('LoggerService',["log"]);
        TestBed.configureTestingModule({
            providers:[
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        })
        calculator = TestBed.get(CalculatorService)
    })

    it('should add two numbers', ()=>{
        // // const logger = new LoggerService()
        // const logger = jasmine.createSpyObj('LoggerService',["log"]);
        // //spyOn(logger,'log')
        // const calculator = new CalculatorService(logger);
        console.log("Add Test")
        const result = calculator.add(2,2);
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1)
    });
    it('should subtract two numbers', ()=>{
        // const logger = jasmine.createSpyObj('LoggerService',["log"]);
        // const calculator = new CalculatorService(logger);
        console.log("Subtract Test")
        const result = calculator.subtract(2,2);
        expect(result).toBe(0,"Unspected Subtraction Result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1)
    });
})