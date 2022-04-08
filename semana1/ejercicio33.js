const reloj = () => {
    setInterval(() => {
        const fecha = new Date();
        const hora = fecha.getHours();
        const minutes = fecha.getMinutes();
        const seg = fecha.getSeconds();

        console.log(`${hora}:${minutes}:${seg}`)
    }, 1000)
}

//reloj()

class relojA {

    constructor(){
        this.fecha = new Date();
        this.horas = this.fecha.getHours()
        this.minutes = this.fecha.getMinutes()
        this.seg = this.fecha.getSeconds()
    }

    actualizar(seg){
        this.seg += seg;

        if(this.seg >=  60){
            this.minutes++;
            this.seg = 0;
        }

        if(this.minutes >= 60){
            this.horas++;
            this.minutes = 0;
        }

        if(this.horas >= 24){
            this.horas = 0;
        }
    }

    mostrar(){
        this.actualizar(1)
        console.log(`${this.horas}:${this.minutes}:${this.seg}`)
    }

    encender(){
        setInterval(() => {
                this.mostrar()
        },1000)
    }
}

var prender = new relojA().encender()
