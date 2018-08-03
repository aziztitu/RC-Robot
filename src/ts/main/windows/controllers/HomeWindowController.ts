import { WindowController } from "../WindowController";
import { Robot } from '../../core/robot/Robot';
import { Logger } from '../../../shared/Logger';

export class HomeWindowController extends WindowController {

    private robot: Robot;

    constructor() {
        super({
            windowOptions: {
                width: 800,
                height: 600,
            },
            shouldWaitForLoad: true
        });

        this.robot = new Robot();
        this.robot.connectToArduino('COM5', () => {

        }, (err) => {
            
        });

        this.window.loadFile("src/html/windows/homeWindow.html");

        this.window.on('ready-to-show', () => {

        });
    }

    public onRendererDataReceived(channel: string, event: any, data: any) {

        // Logger.log("Channel: " + channel);
        // Logger.log("Event: " + event);
        // Logger.log("Data: ");
        // Logger.log(data);

        switch (channel) {
            
        }
    }
}