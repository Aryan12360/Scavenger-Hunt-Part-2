class Security {
    constructor() {

        this.access1 = createInput("").attribute("placeholder", "Your Answer");
        this.access1.position(620, 300);
        this.access1.style('background', 'white');

        this.button1 = createButton('Check');
        this.button1.position(620, 320);
        this.button1.style('background', 'lightgrey');

        this.access2 = createInput("").attribute("placeholder", "Your Answer");
        this.access2.position(620, 450);
        this.access2.style('background', 'white');

        this.button2 = createButton('Check');
        this.button2.position(620, 470);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("").attribute("placeholder", "Your Answer");
        this.access3.position(620, 600);
        this.access3.style('background', 'white');

        this.button3 = createButton('Check');
        this.button3.position(620, 620);
        this.button3.style('background', 'lightgrey');

    }

    display() {

        this.button1.mousePressed(() => {
            if (system.authenticate(Code1, this.access1.value())) {
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if (system.authenticate(Code2, this.access2.value())) {
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if (system.authenticate(Code3, this.access3.value())) {

                this.button3.hide();
                this.access3.hide();

                score++;
            }
        });
    }
}