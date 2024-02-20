export class Rut{
    validaRut(rut){
        let ok = false;
        let spg = rut.replace(/[.-]/g, '');
        let snd = spg.slice(0, -1);
        let r_u_t = snd.split("")
        let t_u_r = r_u_t.reverse();
        let tur = t_u_r.join("");
        
        let multi = 2;
        let sum = 0;
        for(let i = 0;i<tur.length;i++){
            if(multi > 7){
                multi = 2;
            }
            //console.log(tur[i]);
            sum = sum+parseInt(tur[i]*multi);
            multi = multi+1;
        }
        
        let dv = 11-(sum%11);
        let dvu = rut[rut.length-1];
        if(dvu === 'k' || dvu === 'K'){
            dvu = dvu.toUpperCase();
        }
        //console.log('dvu: ',dvu);
        if(dv===11){
            dv = "0";
        }else if(dv === 10){
            dv="K";
        }
        //console.log('dv: ',dv);
        if(String(dv) === dvu){
            ok = true;
        }else{
            ok = false
        }
        return ok;
    }
    limpiaRut(rut){
        let spg = rut.replace(/[.-]/g, '');
        let snd = spg.slice(0, -1);
        let nRut = spg;
        if(spg[spg.length-1] === 'k' || spg[spg.length-1] === 'K'){
            nRut = snd + 'k';
        }
        return nRut;
    }
}