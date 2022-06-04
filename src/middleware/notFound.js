module.exports.not_found = function(id, res) {
    return res.status(400).json({"msg": "Not found"});
};