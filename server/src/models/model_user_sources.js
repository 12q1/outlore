const Sequelize = require('sequelize')
const sequelize = require('../services/pgdb')
const User = require('./model_user')

const UserSources = sequelize.define('user_sources', {
    abcNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    abcNewsAu: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    alJazeeraEn: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    arsTechnica: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    associatedPress: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    australianFinancialReview: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    Axios: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    bbcNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    bbcSport: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    bleacherReport: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    bloomber: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    breitbartNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    businessInsider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    businessInsiderUk: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    buzzfeed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    cbcNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    cnbc: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    cnn: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    cryptoCoinNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    engadget: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    entertainmentWeekly: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    espn: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    espnCricInfo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    financialPost: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    footballItalia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    fortune: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    fourFourTwo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    foxNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    foxSports: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    googleNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    googleNewsAu: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    googleNewsCa: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    googleNewsIN: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    googleNewsUk: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    hackerNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    ign: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    independent: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    mashable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    medicalNewsToday: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    msnbc: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    mtvNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    mtvNewsUk: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    nationalGeographic: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    nationalReview: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    nbcNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    news24: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    newScientist: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    newsComAu: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    newsweek: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    newYorkMagazine: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    nextBigFuture: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    nflNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    nhlNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    politco: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    recode: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    redditRAll: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    reuters: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    rte: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    talksport: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    techcrunch: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    techRadar: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theAmericanConservative: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theGlobeAndMail: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theHill: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theHindu: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theHuffingtonPost: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theIrishTimes: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theJerusalemPost: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theLadBible: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theNextWeb: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theSportBible: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theTimesOfIndia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theVerge: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theWallStreetJournal: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theWashingtonPost: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    theWashingtonTimes: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    time: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    usaToday: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    viceNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    wired: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'user_sources'
})

UserSources.belongsTo(User)

module.exports = UserSources