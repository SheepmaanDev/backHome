const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization // Récupérer le token depuis les en-têtes de la requête
    if (!token) {
        return res.status(401).json({ message: 'Token non fourni' })
    }
    try {
        const decoded = jwt.verify(token, `${process.env.TOKEN}`) // Vérifier le token en utilisant une clé secrète
        req.user = decoded.user // Stocker les informations utilisateur décodées dans l'objet de la requête
        next()
    } catch (err) {
        return res.status(401).json({ message: 'Token invalide' })
    }
}

module.exports = verifyToken