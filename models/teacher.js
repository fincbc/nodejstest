var User= require('./user');
function Teacher(id, name, age, clas){
	User.apply(this,[id, name, age]);
	this.clas= clas;
	this.teach= function (){
		console.log(this.name+ '进入'+ this.clas);
	}
}

module.exports= Teacher;