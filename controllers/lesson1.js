const emilyRoute = (req, res) => {
    res.send('Emily Birch');

}
const hannahRoute = (req, res) => {
    res.send('Hannah Birch');
}
const sarahRoute = (req, res) => {
    res.send('Sarah Birch');
}

module.exports = {
    emilyRoute,
    hannahRoute, 
    sarahRoute
};