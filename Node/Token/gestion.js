class GestionaTokenList{
    constructor(){
        this.blacklist = [];
    }
    addToken(token){
        this.blacklist.push(token)
    }
    getList(){
        return this.blacklist;
    }
    cleanList(){
        this.blacklist.splice(0,this.blacklist.length);
    }
}

module.exports = {GestionaTokenList}