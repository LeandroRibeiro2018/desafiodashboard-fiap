

module.exports={
    index:(req, res) =>{
        res.render('index')
    },
    dashboard:(req, res) =>{
        res.render('dashboard');
    }
}

/*
const DashboardController ={
   index:(req, res) =>{
    res.render('dasboard')
   }    

}
module.exports = DashboardController;*/