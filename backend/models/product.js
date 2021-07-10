const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    nom: {
        type: String,
        required: [true, 'Donner le nom du produit'],
        trim: true,
        maxLength: [100, 'Ne peut exeder 100 caracteurs']
    },
    prix: {
        type: Number,
        required: [true, 'Donner le prix'],
        maxLength: [100, 'Ne peut exeder 10 caracteurs'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Donner la description'],
        trim: true,
        maxLength: [200, 'Ne peut exceder 100']
    },
    notation: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            
        }
    ],
    categories: {
        type: String,
        required: [true, 'Selectionnez caregorie'],
        enum: {
            values: [
                'Electronique',
                'Cameras',
                'Laptop',
                'Accessoires',
                'Livres',
                'Voitures',
                'Habits/Chaussures',
                'Beauté',
                'Sport',
                'Maison'
            ],
            message: 'Selectionnez correctement le categorie'
        }
    },
    stocks: {
        type: Number,
        required: [true, 'Entrer stock'],
        maxLength: [5, 'Ne peut exceder 5 caracteurs'],
        default: 0
    },
    nbrVue: {
        type: Number,
        defaults: 0
    },
    vue:[
        {
            nom:{
                type: String,
                required: true
            },
            notation: {
                type: Number,
                required: true
            },
            commentaire: {
                type: String,
                required: true
            }
        }
    ],
    creerA: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model('Produits', productSchema);