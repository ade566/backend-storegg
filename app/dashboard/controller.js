module.exports = {
    index: async(req, res) => {
        try {
            res.render('dashboard', {
                title: 'Dashboard'
            })            
        } catch (error) {
            console.log(error);
        }
    }
}